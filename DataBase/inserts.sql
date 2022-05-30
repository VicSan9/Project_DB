INSERT into miembros (cc, nombre, telefono, direccion) 
VALUES 	(1010150276, 'Víctor Alfonso Sánchez', 3176215539, 'Cr.5- No.25-60'),
		(3124124141, 'Rosa Isable Rosero', 3215591266, 'Cr.25- No 55-21N'),
        (3124125125, 'Mercy Castro', 3215125126, 'Cr.32-No. 23-12');

INSERT INTO vendedores (id_miembro)
VALUES 	(2110),
		(2111);

INSERT INTO administrador (id_admin, id_miembro, contraseña)
VALUES 	(9110, 2112, '1234');

INSERT into transacciones (fecha, id_miembro)
VALUES 	('2022/12/31', 2110),
		('2022/12/31', 2110),
        ('2022/12/31', 2111),
        ('2022/12/31', 2112),
        ('2022/12/31', 2111);

INSERT into productos (nombre, p_venta_u, p_compra_u, lote, descripcion, cantidad, fecha_vencimiento)
VALUES 	('Arroz Diana', 1500, 800, '27145', 'Arroz Diana 1 libra', 50, '2023/01/15'),
 		('Doritos', 1500, 1000, '21544', 'Fritura de maiz', 20, '2023/01/15'),
 		('Trululu', 1000, 500, '25236', 'Gomitas de osos', 10, '2023/01/15');
        
INSERT into proovedores
VALUES 	(12214, 'Proovedor 1', 'Proovedor de gomitas', 3176215539, 'Cr.5- No.25-60'),
		(12125, 'Proovedor 2', 'Proovedor de frituras', 3215591266, 'Cr.25- No 55-21N'),
        (12512, 'Proovedor 3', 'Proovedor de alimentos', 3215125126, 'Cr.32-No. 23-12');
        
INSERT into informes (total_costos, total_ventas, ultilidad, num_unico)
VALUES 	(25000, 30000, 5000, 4114),
		(10000, 16000, 6000, 4112);
        
INSERT INTO productoproovedor
VALUES 	(12125, 3111),
		(12214, 3112),
        (12512, 3110);
        
INSERT INTO transaccionproducto
VALUES 	(4113, 3111),
		(4111, 3110);