create database ferremas_db;

use ferremas_db;

drop table if exists promociones;
drop table if exists stock;
drop table if exists sucursal;
drop table if exists productos;
drop table if exists subcat;
drop table if exists categorias;

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

insert into categorias(categoria)
values ('Tornillos y Anclajes');

insert into categorias(categoria)
values ('Herramientas Manuales');

insert into subcat(categoria, subcat)
values (1, 'Tornilleria');

insert into subcat(categoria, subcat)
values (2, 'Martillos');

insert into subcat(categoria, subcat)
values (2, 'Taladros');

insert into productos(codigo, subcat, marca, nombre, precio)
values (1, 1, 'Tornichile', 'Tornillo TRS 4P', 2500);

insert into productos(codigo, subcat, marca, nombre, precio)
values (2, 2, 'Wurth', 'Martillo 3 Golpes', 4490);

insert into productos(codigo, subcat, marca, nombre, precio)
values (3, 2, 'Wurth', 'Taladro Percutor', 59990);

insert into productos(codigo, subcat, marca, nombre, precio)
values (4, 2, 'FerreTools', 'Kit Destornilladores', 3990);


