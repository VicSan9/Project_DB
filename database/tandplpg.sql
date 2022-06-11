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

--vista productos proximos a vencerse
CREATE VIEW product_to_expire AS
SELECT p.nombre, p.lote, p.fecha_vencimiento
FROM productos AS p
WHERE p.fecha_vencimiento <= current_date + 365
ORDER BY p.fecha_vencimiento ASC;

--vista inventario 
CREATE VIEW inventory as
SELECT p.nombre, p.descripcion, p.lote, p.stack
FROM productos AS p;

