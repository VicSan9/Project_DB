--Eliminar vista 
DROP VIEW end_view_info, product_to_expire, inventory, num_sales;

--Eliminar triggers
DROP TRIGGER trigger_function_insert_info on transaccionproducto;
DROP TRIGGER trigger_function_reduce_stack on transaccionproducto;

--Eliminar funciones 
DROP FUNCTION function_insert_info, function_reduce_stack;

--Eliminar tablas
DROP TABLE vendedores, administrador, miembros, productos, 
		   transaccionproducto, transacciones, vendedores,
           informes, productoproveedor, proveedores;

--Eliminar secuencias
DROP SEQUENCE id_vend_seq, id_miemb_seq, id_prod_seq,
		      id_transac_seq, cod_info_seq, id_admin_seq;
			  

			  