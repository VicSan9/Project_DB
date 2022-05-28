CREATE TABLE miembros (
	id integer NOT NULL PRIMARY KEY,
	nombre varchar (20) NOT NULL,
	telefono integer NOT NULL,
	direccion varchar (20) NOT NULL,
);

CREATE TABLE administrador (
	id_admin integer NOT NULL PRIMARY KEY,
	id_miembro integer NOT NULL,
	FOREIGN KEY (id_miembro) REFERENCES miembros (id_miembro)
);

CREATE TABLE vendedores (

);