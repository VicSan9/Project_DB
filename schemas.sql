CREATE TABLE miembros (
	id integer NOT NULL PRIMARY KEY,
	nombre varchar (20) NOT NULL,
	telefono integer NOT NULL,
	direccion varchar (20) NOT NULL
);

CREATE TABLE administrador (
	id_admin integer NOT NULL,
	id integer NOT NULL,
	PRIMARY KEY (id_admin, id)
	FOREIGN KEY (id) REFERENCES miembros (id)
);

CREATE TABLE vendedores (
	id_vendedor integer NOT NULL PRIMARY KEY,
	id integer NOT NULL,
	FOREIGN KEY (id) REFERENCES miembros (id)
);

CREATE TABLE transacciones (
	num_unico integer NOT NULL PRIMARY KEY,
	fecha time NOT NULL,
	id integer NOT NULL,
	FOREIGN KEY (id) REFERENCES miembros (id)
);

CREATE TABLE productos (
	codigo integer NOT NULL PRIMARY KEY,
	nombre varchar (20) NOT NULL,
	p_venta_u integer NOT NUL,
	p_compra_u integer NOT NULL,
	descripcion varchar (100) NOT NULL,
	cantidad integer NOT NULL	
);

CREATE TABLE transaccionProductos (
	num_unico integer NOT NULL,
	codigo integer NOT NULL,
	PRIMARY KEY (num_unico, codigo),
	FOREIGN KEY (num_unico) REFERENCES transacciones (num_unico),
	FOREIGN KEY (codigo) REFERENCES productos (codigo)
);