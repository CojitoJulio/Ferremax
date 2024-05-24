DROP DATABASE ferremas_db;
CREATE DATABASE ferremas_db;
USE ferremas_db ;

DROP USER if exists 'user1'@'localhost';
CREATE USER 'user1'@'localhost' IDENTIFIED BY 'palomamami';
GRANT ALL PRIVILEGES ON  ferremas_db  TO 'user1'@'localhost';
GRANT SELECT ON ferremas_db.* to 'user1'@'localhost';
GRANT INSERT ON ferremas_db.* to 'user1'@'localhost';
FLUSH PRIVILEGES;
ALTER USER 'user1'@'localhost' IDENTIFIED WITH mysql_native_password BY 'palomamami';

-- Usuarios

create table tipo_usuario (
	id_tipo int not null,
    nombre_tipo varchar(30),
    primary key(id_tipo)
);

create table usuarios (
	user_id int not null auto_increment,
    nombre varchar(30),
    apellido varchar(30),
    pass varchar(20),
    correo varchar(50), 
    tipo_user int not null,
    foreign key(tipo_user) references tipo_usuario(id_tipo),
    primary key(user_id)
);

-- Productos

create table categorias (
	cate_id int not null auto_increment,
    categoria varchar(30),
    primary key(cate_id)
);

create table sucursal (
	sucursal_id int not null auto_increment,
    nombre varchar(30),
    direccion varchar(100),
    primary key(sucursal_id)
);

create table subcat (
	subcat_id int not null auto_increment,
    categoria int,
    subcat varchar(20),
    foreign key(categoria) references categorias(cate_id),
    primary key(subcat_id)
);

create table productos (
	codigo int not null,
    subcat int,
    marca varchar(30),
    nombre varchar(70),
    precio int,
    foreign key(subcat) references subcat(subcat_id),
    primary key(codigo)
);

create table stock (
	stock_id int not null auto_increment,
    prod_id int not null,
    sucursal_id int not null,
    stock int,
    foreign key(prod_id) references productos(codigo),
    foreign key(sucursal_id) references sucursal(sucursal_id),
    primary key(stock_id)
);

create table promociones (
	promo_id int not null auto_increment,
    producto int,
    preciop int not null,
    iniciop date not null,
    finalp date not null,
    foreign key(producto) references productos(codigo),
    primary key(promo_id)
);


insert into sucursal(nombre, direccion)
values ('Providencia', 'Manuel Montt 3824');

insert into sucursal(nombre, direccion)
values ('Puente Alto', 'Casas Viejas 1893');

insert into sucursal(nombre, direccion)
values ('Maipu', '3 Poninente 2913');

insert into sucursal(nombre, direccion)
values ('Las Condes', 'Avenida Vitacura 0924');

-- Categorias

insert into categorias(categoria)
values ('Tornillos y Anclajes');

insert into categorias(categoria)
values ('Herramientas Manuales');

insert into categorias(categoria)
values ('Materiales Basicos');

insert into categorias(categoria)
values ('Equipos de Seguridad');

insert into categorias(categoria)
values ('Fijaciones y Adhesivos');

insert into categorias(categoria)
values ('Equipos de Medicion');

-- Subcategorias

insert into subcat(categoria, subcat)
values (1, 'Tornilleria');

insert into subcat(categoria, subcat)
values (2, 'Martillos');

insert into subcat(categoria, subcat)
values (2, 'Taladros');

insert into subcat(categoria, subcat)
values (3, 'Soldadura');

insert into subcat(categoria, subcat)
values (3, 'Cables');

-- Productos

insert into productos(codigo, subcat, marca, nombre, precio)
values (1, 4, 'Indura', 'Soldadura en Polvo', 2500);

insert into stock(prod_id, sucursal_id, stock)
values (1, 1, 45); 

insert into stock(prod_id, sucursal_id, stock)
values (1, 2, 12);

insert into stock(prod_id, sucursal_id, stock)
values (1, 3, 1);

insert into stock(prod_id, sucursal_id, stock)
values (1, 4, 0);

insert into productos(codigo, subcat, marca, nombre, precio)
values (2, 2, 'Wurth', 'Martillo 3 Golpes', 4490);

insert into stock(prod_id, sucursal_id, stock)
values (2, 1, 9);

insert into stock(prod_id, sucursal_id, stock)
values (2, 2, 25);

insert into stock(prod_id, sucursal_id, stock)
values (2, 3, 23);

insert into stock(prod_id, sucursal_id, stock)
values (2, 4, 12);

insert into productos(codigo, subcat, marca, nombre, precio)
values (3, 2, 'Wurth', 'Taladro Percutor', 59990);

insert into stock(prod_id, sucursal_id, stock)
values (3, 1, 1);

insert into stock(prod_id, sucursal_id, stock)
values (3, 2, 0);

insert into stock(prod_id, sucursal_id, stock)
values (3, 3, 9);

insert into stock(prod_id, sucursal_id, stock)
values (3, 4, 2);

insert into productos(codigo, subcat, marca, nombre, precio)
values (4, 5, 'FerreTools', 'Cable Inalambrico x Metro', 3990);

insert into stock(prod_id, sucursal_id, stock)
values (4, 1, 31);

insert into stock(prod_id, sucursal_id, stock)
values (4, 2, 52);

insert into stock(prod_id, sucursal_id, stock)
values (4, 3, 23);

insert into stock(prod_id, sucursal_id, stock)
values (4, 4, 44);

-- Tipo Usuarios

insert into tipo_usuario(id_tipo, nombre_tipo)
values (0, 'Administrador');

insert into tipo_usuario(id_tipo, nombre_tipo)
values (1, 'Cliente');

-- Usuarios

insert into usuarios(nombre, apellido, pass, correo, tipo_user)
values ("Bruno", "Bevilaqcua", "perroChocolo123", "brunitoAlbo666@gmail.com", 1);

insert into usuarios(nombre, apellido, pass, correo, tipo_user)
values ("Daniel", "Gutierrez", "CojoJulio123", "cojitojulio@gmail.com", 0);
