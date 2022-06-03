INSERT INTO miembros (cc, nombre, telefono, direccion) 
VALUES 	(1010150276, 'Víctor Alfonso Sánchez', 3176215539, 'Cr.5- No.25-60'),
		(3124124141, 'Rosa Isable Rosero', 3215591266, 'Cr.25- No 55-21N'),
        (3124125125, 'Mercy Castro', 3215125126, 'Cr.32-No. 23-12');

INSERT INTO vendedores (id_miembro)
VALUES 	(2110),
		(2111);

INSERT INTO administrador (id_miembro, contraseña, user_admin)
VALUES 	(2112, '1234', 'Mercy09');

INSERT INTO transacciones (fecha, id_miembro)
VALUES 	('2022/12/31', 2110),
		('2022/12/31', 2110),
		('2022/12/31', 2110);

INSERT INTO productos (nombre, p_venta_u, p_compra_u, lote, descripcion, stack, fecha_vencimiento)
VALUES 	('Arroz Diana', 1500, 800, '27145', 'Arroz Diana 1 libra', 50, '2023/01/15'),
 		('Doritos', 1500, 1000, '21544', 'Fritura de maiz', 20, '2023/01/15'),
 		('Trululu', 1000, 500, '25236', 'Gomitas de osos', 10, '2023/01/15');
        
INSERT INTO proveedores
VALUES 	(12214, 'Proovedor 1', 'Proovedor de gomitas', 3176215539, 'Cr.5- No.25-60'),
		(12125, 'Proovedor 2', 'Proovedor de frituras', 3215591266, 'Cr.25- No 55-21N'),
        (12512, 'Proovedor 3', 'Proovedor de alimentos', 3215125126, 'Cr.32-No. 23-12');
        
INSERT INTO productoproveedor
VALUES 	(12125, 3111),
		(12214, 3112),
        (12512, 3110);
        
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4110, 3110, 4);
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4110, 3111, 2);		
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4110, 3112, 3);      
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4111, 3112, 4);
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4111, 3111, 4);
INSERT INTO transaccionproducto (num_unico, codigo, cantidad_comprada) VALUES (4112, 3110, 4);  