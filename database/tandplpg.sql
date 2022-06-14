--Función para insertar informes
CREATE OR REPLACE FUNCTION function_insert_info()
RETURNS TRIGGER AS $function_insert_info$
DECLARE 
    numUnico INTEGER = (SELECT num_unico 
						 FROM transaccionproducto AS TP 
						 ORDER BY TP.id_tp DESC LIMIT 1);
	codigoProducto INTEGER = (SELECT codigo 
							   FROM transaccionproducto AS TP 
						 	   ORDER BY TP.id_tp DESC LIMIT 1);	
	totalCostos INTEGER = (SELECT p_compra_u
						   FROM productos AS P
						   WHERE P.codigo = codigoProducto);				
    totalVentas INTEGER = (SELECT p_venta_u
						   FROM productos AS P
						   WHERE P.codigo = codigoProducto);
	utilidad INTEGER = totalVentas - totalCostos;					   
BEGIN
	INSERT INTO informes (total_costos, total_ventas, utilidad, num_unico, codigo_producto)
	VALUES 	(totalCostos, totalVentas, utilidad, numUnico, codigoProducto);	
RETURN NEW;
END
$function_insert_info$ LANGUAGE plpgsql;

--Funcion para reducir el stack de productos
CREATE OR REPLACE FUNCTION function_reduce_stack()
RETURNS TRIGGER AS $function_reduce_stack$
DECLARE 
	codigoProducto INTEGER = (SELECT codigo 
							   FROM transaccionproducto AS TP 
						 	   ORDER BY TP.id_tp DESC LIMIT 1);
							   
	codigoTransaccion INTEGER = (SELECT id_tp 
							   FROM transaccionproducto AS TP 					
						 	   ORDER BY TP.id_tp DESC LIMIT 1);	
							   
	totalProductos INTEGER = ( SELECT stack
							 FROM productos AS p
							 WHERE  p.codigo = codigoProducto);
							 
	productoComprado INTEGER = (SELECT cantidad_comprada
							   FROM transaccionProducto AS TP
							   WHERE TP.id_tp = codigotransaccion);
							   
	reducirProducto INTEGER = totalProductos - productoComprado;
	
	
BEGIN
	UPDATE productos AS P
	SET stack = reducirProducto
	WHERE p.codigo = codigoProducto;
	
	IF totalProductos < productoComprado THEN 
	RAISE EXCEPTION 'The stack of products is 0';
	
	ELSE
	IF reducirProducto = 0 THEN 
	DELETE FROM productos AS p WHERE P.stack = 0;
	
    END IF;
	END IF;

RETURN NEW;
END
$function_reduce_stack$ LANGUAGE plpgsql;

--Trigger para crear informes
CREATE TRIGGER trigger_function_insert_info
AFTER INSERT ON transaccionproducto
FOR EACH ROW
EXECUTE PROCEDURE function_insert_info();

--Trigger para reducir stack productos
CREATE TRIGGER trigger_function_reduce_stack
AFTER INSERT ON transaccionproducto
FOR EACH ROW
EXECUTE PROCEDURE function_reduce_stack();

--Vista final de los informes
CREATE VIEW end_view_info AS
SELECT P.nombre AS nombre_producto, 
	   SUM(I.total_costos) AS total_de_costos, 
	   SUM(I.total_ventas) AS total_de_ventas, 
	   SUM(I.utilidad) AS total_de_utilidad
FROM informes AS I
JOIN productos AS P
ON I.codigo_producto = P.codigo
GROUP BY nombre;

--Vista productos proximos a vencerse
CREATE VIEW product_to_expire AS
SELECT p.nombre, p.lote, P.fecha_vencimiento, P.stack
FROM productos AS P
WHERE P.fecha_vencimiento <= current_date + 365
ORDER BY P.fecha_vencimiento ASC;

--Vista inventario 
CREATE VIEW inventory AS
SELECT P.nombre, P.descripcion, P.lote, P.stack
FROM productos AS P;

--Vista para ver la cantidad de productos que vendio un miembro
CREATE VIEW num_sales AS
SELECT M.nombre, SUM (TP.cantidad_comprada) AS num_ventas
FROM transacciones AS T
JOIN transaccionProducto AS TP
ON T.num_unico = TP.num_unico 
JOIN miembros AS M
ON M.id_miembro = T.id_miembro
GROUP BY M.nombre
ORDER BY SUM (TP.cantidad_comprada) DESC;



