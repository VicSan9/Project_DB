--Crear base de datos
--CREATE DATABASE backpackdb;

--Crear secuencias
	--Secuencia id de vendedor
CREATE SEQUENCE IF NOT EXISTs id_vend_seq INCREMENT 1 START 1110;

	--Secuencia id de miembro
CREATE SEQUENCE IF NOT EXISTs id_miemb_seq INCREMENT 1 START 2110;

	--Secuencia id de productos
CREATE SEQUENCE IF NOT EXISTs id_prod_seq INCREMENT 1 START 3110;

	--Secuencia id de transacciones 
CREATE SEQUENCE IF NOT EXISTs id_transac_seq INCREMENT 1 START 4110;

	--Secuencia codigo de informes 
CREATE SEQUENCE IF NOT EXISTs cod_info_seq INCREMENT 1 START 5110;

	--Secuencia id de admin
CREATE SEQUENCE IF NOT EXISTs id_admin_seq INCREMENT 1 START 6110;

--Crear tablas
CREATE TABLE IF NOT EXISTs miembros (
	id_miembro INTEGER UNIQUE DEFAULT nextval('id_miemb_seq'),
  	cc BIGINT UNIQUE,
	nombre VARCHAR (50) NOT NULL,
	telefono BIGINT NOT NULL,
	direccion VARCHAR (50) NOT NULL,
  	PRIMARY KEY (id_miembro, cc)
);

CREATE TABLE IF NOT EXISTs productos (
	codigo INTEGER PRIMARY KEY DEFAULT nextval('id_prod_seq'),
	nombre VARCHAR (50) NOT NULL,
	p_venta_u INTEGER NOT NULL,
	p_compra_u INTEGER NOT NULL,
	lote  VARCHAR (50) NOT NULL,
	descripcion VARCHAR (100) NOT NULL,
	fecha_vencimiento DATE NOT NULL,
	stack INTEGER NOT NULL	
);

CREATE TABLE IF NOT EXISTs proveedores (
	id_proveedor INTEGER PRIMARY KEY,
  	nombre VARCHAR (50) not NULL,
  	descripcion VARCHAR (100) not NULL,
  	telefono BIGINT NOT NULL,
    direccion VARCHAR (100) NOT NULL
);

CREATE TABLE IF NOT EXISTs administrador (
	id_admin INTEGER PRIMARY KEY DEFAULT nextval('id_admin_seq'),
	id_miembro INTEGER NOT NULL,
	contraseña VARCHAR (50) NOT NULL,
	user_admin VARCHAR (50) NOT NULL,
	FOREIGN KEY (id_miembro) REFERENCES miembros (id_miembro)
);

CREATE TABLE IF NOT EXISTs vendedores (
	id_vendedor INTEGER PRIMARY KEY DEFAULT nextval('id_vend_seq'),
	id_miembro INTEGER NOT NULL,
	FOREIGN KEY (id_miembro) REFERENCES miembros (id_miembro)
);

CREATE TABLE IF NOT EXISTs transacciones (
	num_unico INTEGER PRIMARY KEY DEFAULT nextval('id_transac_seq'),
	fecha DATE NOT NULL,
	id_miembro INTEGER NOT NULL,
	FOREIGN KEY (id_miembro) REFERENCES miembros (id_miembro)
);

CREATE TABLE IF NOT EXISTs informes (
	codigo INTEGER PRIMARY KEY DEFAULT nextval('cod_info_seq'),
  	utilidad INTEGER NOT NULL,
  	total_costos INTEGER NOT NULL,
  	total_ventas INTEGER NOT NULL,
  	num_unico INTEGER NOT NULL,
	codigo_producto INTEGER NOT NULL,
  	FOREIGN KEY (num_unico) REFERENCES transacciones(num_unico),
	FOREIGN KEY (codigo_producto) REFERENCES productos(codigo)
);

CREATE TABLE IF NOT EXISTs transaccionProducto (
	id_tp SERIAL NOT NULL,
	num_unico INTEGER NOT NULL,
	codigo INTEGER NOT NULL,
  	cantidad_comprada INTEGER NOT NULL,
	PRIMARY KEY (id_tp, num_unico, codigo),
	FOREIGN KEY (num_unico) REFERENCES transacciones (num_unico),
	FOREIGN KEY (codigo) REFERENCES productos (codigo)
); 

CREATE TABLE IF NOT EXISTs productoProveedor (
	id_proveedor INTEGER NOT NULL,
  	codigo INTEGER NOT NULL,
  	PRIMARY KEY (id_proveedor, codigo),
  	FOREIGN KEY (id_proveedor) REFERENCES proveedores(id_proveedor),
  	FOREIGN KEY (codigo) REFERENCES productos(codigo)
);