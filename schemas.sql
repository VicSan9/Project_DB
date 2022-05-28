CREATE TABLE miembros (
	id integer NOT NULL PRIMARY KEY,
	nombre varchar (20) NOT NULL,
	telefono integer NOT NULL,
	direccion varchar (20) NOT NULL
);

CREATE TABLE administrador (
	id_admin integer NOT NULL PRIMARY KEY,
	id integer NOT NULL,
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
