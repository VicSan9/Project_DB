CREATE OR REPLACE FUNCTION function_insert_info()
RETURNS TRIGGER AS $function_insert_info$
DECLARE
	total_costos INTEGER = 0;
    total_ventas INTEGER = 0;
    utilidad INTEGER = 0;
    num_unico INTEGER = (SELECT max(num_unico) from transaccionproducto);

BEGIN
	INSERT INTO informes (total_costos, total_ventas, utilidad, num_unico)
	VALUES 	(total_costos, total_ventas, utilidad, num_unico);
RETURN new;
END
$function_insert_info$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_function_insert_info
AFTER INSERT on transaccionproducto
FOR EACH ROW
EXECUTE PROCEDURE function_insert_info();

SELECT * FROM transaccionproducto

SELECT * FROM informes;

--Vista final de los informes
--CREATE VIEW end_view_info AS
SELECT p.nombre, t.num_unico, TP.num_unico, TP.codigo
FROM transacciones as t 
JOIN transaccionproducto as TP
on TP.num_unico = T.num_unico
JOIN productos as P
ON P.codigo = TP.codigo
--WHERE I.num_unico = T.num_unico and TP.num_unico = num_unico and 
--GROUP by p.codigo

SELECT * FROM end_view_info; 