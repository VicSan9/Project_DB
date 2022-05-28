--Crear secuencias
	--Secuencia id de vendedor
CREATE SEQUENCE if not EXISTs id_vend_seq INCREMENT 1 START 1110;

	--Secuencia id de miembro
CREATE SEQUENCE IF NOT EXISTs id_miemb_seq INCREMENT 1 START 2110;

	--Secuencia id de productos
CREATE SEQUENCE IF NOT EXISTs id_prod_seq INCREMENT 1 START 3110;

	--Secuencia id de transacciones 
CREATE SEQUENCE IF NOT EXISTs id_transac_seq INCREMENT 1 START 4110;

	--Secuencia codigo de informes 
CREATE SEQUENCE IF NOT EXISTs cod_info_seq INCREMENT 1 START 5110;

--Crear tablas
CREATE TABLE IF NOT EXISTs miembros (
	id_miembro integer UNIQUE DEFAULT nextval('id_miemb_seq'),
  	cc BIGINT UNIQUE,
	nombre varchar (50) NOT NULL,
	telefono BIGINT NOT NULL,
	direccion varchar (50) NOT NULL,
  	PRIMARY KEY (id_miembro, cc)
);

CREATE TABLE IF NOT EXISTs productos (
	codigo integer PRIMARY KEY DEFAULT nextval('id_prod_seq'),
	nombre varchar (50) NOT NULL,
	p_venta_u integer NOT NULL,
	p_compra_u integer NOT NULL,
	descripcion varchar (100) NOT NULL,
	cantidad integer NOT NULL	
);

CREATE TABLE IF NOT EXISTs proovedores (
	id_proovedor INTEGER PRIMARY KEY,
  	nombre VARCHAR (50) not NULL,
  	descripcion VARCHAR (100) not NULL,
  	telefono BIGINT NOT NULL,
    direccion VARCHAR (100) NOT NULL
);

CREATE TABLE IF NOT EXISTs administrador (
	id_admin serial PRIMARY KEY,
	id_miembro integer NOT NULL,
	FOREIGN KEY (id_miembro) REFERENCES miembros (id_miembro)
);

CREATE TABLE IF NOT EXISTs vendedores (
	id_vendedor integer PRIMARY KEY DEFAULT nextval('id_vend_seq'),
	id_miembro integer NOT NULL,
	FOREIGN KEY (id_miembro) REFERENCES miembros (id_miembro)
);

CREATE TABLE IF NOT EXISTs transacciones (
	num_unico integer PRIMARY KEY DEFAULT nextval('id_transac_seq'),
	fecha DATE NOT NULL,
	id_miembro integer NOT NULL,
	FOREIGN KEY (id_miembro) REFERENCES miembros (id_miembro)
);

CREATE TABLE IF NOT EXISTs informes (
	codigo INTEGER PRIMARY KEY DEFAULT nextval('cod_info_seq'),
  	ultilidad INTEGER not NULL,
  	total_costos INTEGER not NULL,
  	total_ventas INTEGER not NULL,
  	num_unico INTEGER not NULL,
  	FOREIGN KEY (num_unico) REFERENCES transacciones(num_unico)
);

CREATE TABLE IF NOT EXISTs transaccionProducto (
	num_unico integer NOT NULL,
	codigo integer NOT NULL,
	PRIMARY KEY (num_unico, codigo),
	FOREIGN KEY (num_unico) REFERENCES transacciones (num_unico),
	FOREIGN KEY (codigo) REFERENCES productos (codigo)
); 

CREATE TABLE IF NOT EXISTs productoProovedor (
	id_proovedor INTEGER NOT NULL,
  	codigo INTEGER NOT NULL,
  	PRIMARY KEY (id_proovedor, codigo),
  	FOREIGN KEY (id_proovedor) REFERENCES proovedores(id_proovedor),
  	FOREIGN KEY (codigo) REFERENCES productos(codigo)
);