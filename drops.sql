--Eliminar tablas
DROP TABLE vendedores, administrador, miembros, productos, 
		   transaccionproducto, transacciones, vendedores,
           informes, productoproovedor, proovedores;

--Eliminar secuencias
DROP SEQUENCE id_vend_seq, id_miemb_seq, id_prod_seq,
		      id_transac_seq, cod_info_seq;