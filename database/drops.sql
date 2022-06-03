--Eliminar vista 
DROP VIEW end_view_info;

--Eliminar triggers
DROP TRIGGER trigger_function_insert_info on transaccionproducto;

--Eliminar funciones 
DROP FUNCTION function_insert_info;

--Eliminar tablas
DROP TABLE vendedores, administrador, miembros, productos, 
		   transaccionproducto, transacciones, vendedores,
           informes, productoproovedor, proovedores;

--Eliminar secuencias
DROP SEQUENCE id_vend_seq, id_miemb_seq, id_prod_seq,
		      id_transac_seq, cod_info_seq;