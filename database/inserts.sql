INSERT INTO miembros (cc, nombre, telefono, direccion) 
VALUES 	(3124125125, 'Mercy Castro', 3215125126, 'Cr.32-No. 23-12'),
		(1010150276, 'Víctor Alfonso Sánchez', 3176215539, 'Cr.5- No.25-60'),
		(3124124141, 'Rosa Isable Rosero', 3215591266, 'Cr.25- No 55-21N');
        
INSERT INTO vendedores (id_miembro)
VALUES 	(2112),
		(2111);

INSERT INTO administrador (id_miembro, contraseña, user_admin)
VALUES 	(2110, '1234', 'Mercy09');

INSERT INTO transacciones (fecha, id_miembro) VALUES('2022/12/31', 2110);
INSERT INTO transacciones (fecha, id_miembro) VALUES('2022/12/31', 2112);
INSERT INTO transacciones (fecha, id_miembro) VALUES('2022/12/31', 2112);
INSERT INTO transacciones (fecha, id_miembro) VALUES('2022/06/03', 2111);
INSERT INTO transacciones (fecha, id_miembro) VALUES('2022/06/06', 2111);


INSERT INTO productos (nombre, p_venta_u, p_compra_u, lote, descripcion, stack, fecha_vencimiento)
VALUES 	('Arroz Diana', 1500, 800, '27145', 'Arroz Diana 1 libra', 50, '2023/01/15'),
 		('Doritos', 1500, 1000, '21544', 'Fritura de maiz', 20, '2022/07/15'),
 		('Trululu', 1000, 500, '25236', 'Gomitas de osos', 15, '2024/06/15');
        
INSERT INTO proveedores
VALUES 	(12214, 'Proveedor 1', 'Proveedor de gomitas', 3176215539, 'Cr.5- No.25-60'),
		(12125, 'Proveedor 2', 'Proveedor de frituras', 3215591266, 'Cr.25- No 55-21N'),
        (12512, 'Proveedor 3', 'Proveedor de alimentos', 3215125126, 'Cr.32-No. 23-12');
        
INSERT INTO productoproveedor (id_proveedor, codigo)
VALUES 	(12125, 3111),
		(12214, 3112),
        (12512, 3110);
        
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4110, 3110, 4);
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4110, 3111, 2);		
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4110, 3112, 3);      
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4111, 3112, 4);
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4111, 3111, 4);
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4112, 3110, 4); 
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4113, 3110, 10);
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4114, 3111, 10);
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4114, 3112, 3);




