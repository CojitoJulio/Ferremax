DROP DATABASE ferremas_db;
CREATE DATABASE ferremas_db;
USE ferremas_db ;

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
    subcat varchar(30),
    imagen varchar(200),
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
values ('Providencia', 'Manuel Montt 3824'),
       ('Puente Alto', 'Casas Viejas 1893'),
       ('Maipu', '3 Poninente 2913'),
       ('Las Condes', 'Avenida Vitacura 0924');

-- Categorias

insert into categorias(categoria)
values ('Tornillos y Anclajes'),
	   ('Herramientas Manuales'),
       ('Materiales Basicos'),
       ('Equipos de Seguridad'),
       ('Fijaciones y Adhesivos'),
       ('Equipos de Medicion');

-- Subcategorias

insert into subcat(categoria, subcat, imagen)
values (1, 'Tornilleria', 'https://superfil.cl/wp-content/uploads/2020/08/Tornillo_Mesa-de-trabajo-1.png'),
       (2, 'Martillos', 'https://baumart.cl/wp-content/uploads/2024/02/martillo-inoxcrom.webp'),
       (2, 'Herramientas', 'https://cdnx.jumpseller.com/maqstore/image/35575664/resize/540/540?1684860702'),
       (2, 'Taladros', 'https://www.triplee.cl/8494-medium_default/taladro-rotomartillo-dewalt-dcd778.jpg'),
       (2, 'Destornilladores', 'https://www.ferreteriasandina.cl/media/catalog/product/cache/1/image/1000x/82fa5986d0d3a884b873ffa21a2247bd/6/0/60-002.jpg'),
       (2, 'Llaves', 'https://co.stanleytools.global/LAG/PRODUCT/IMAGES/HIRES/STMT73648-LA/STMT73648-LA_1.jpg?resize=530x530'),
       (2, 'Cierras', 'https://ferreteriayconstruccion.com.co/img/productos/1574868566.png'),
       (2, 'Lijadoras', 'https://cdnx.jumpseller.com/maqstore/image/32671436/BO4556.png?1677683617'),
       (2, 'Materiales de Contruccion', 'https://aguila.cl/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/p/l/pla3111.jpg'),
       (3, 'Soldadura', 'https://construmartcl.vtexassets.com/arquivos/ids/195020/18901_1.jpg?v=638182803822270000'),
       (3, 'Cemento', 'https://ebema021123.b-cdn.net/wp-content/uploads/2022/10/502740.jpg'),
       (3, 'Arena', 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZmFsYWJlbGxh/067ebc35-c07a-5ff1-b6c8-ab219b47dea7'),
       (3, 'Ladrillos', 'https://constructor.lacuarta.com/wp-content/uploads/2022/07/Ladrillo-fiscal.jpg'),
       (3, 'Pinturas', 'https://construmartcl.vtexassets.com/arquivos/ids/204250/232365_1.jpg?v=638270745181900000'),
       (3, 'Barnices', 'https://www.weitzler.cl/bitobee/wp-content/uploads/2022/11/1000500349-1.jpg'),
       (5, 'Ceramicos', 'https://easycl.vtexassets.com/arquivos/ids/773841/1694446061483_162090-03.jpg?v=638300428928500000'),
       (3, 'Cables', 'https://easycl.vtexassets.com/arquivos/ids/418415/1628713503205_1258918-01.jpg?v=637643103119770000'),
       (4, 'Lentes de Seguridad', 'https://urrea.com/media/catalog/product/1/3/137326.jpeg?auto=webp&format=pjpg&fit=cover'),
       (4, 'Accesorios Varios', 'https://http2.mlstatic.com/D_NQ_NP_603402-MLU71760215291_092023-O.webp'),
	   (4, 'Cascos', 'https://libus.cl/media/catalog/product/cache/8c8d34078b36c1ef38bfd913031288cb/c/a/cascos-01_1.jpg'),
       (4, 'Guantes', 'https://www.puntosafety.cl/wp-content/uploads/2020/08/1047-Guante-Multiflex.jpg'),
       (6, 'Huincha', 'https://ferreteriaprat.cl/media/catalog/product/h/u/hui028943_10_hclrbe2e3gvocv3u.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'),
       (6, 'Medidores',  'https://inalambricoschile.vtexassets.com/arquivos/ids/158629-800-auto?v=637719314713200000&width=800&height=auto&aspect=true');

-- Productos

/*

insert into productos(codigo, subcat, marca, nombre, precio)
values (1, 4, 'Indura', 'Soldadura en Polvo', 2500);

insert into stock(prod_id, sucursal_id, stock)
values (1, 1, 45),
	   (1, 2, 12),
       (1, 3, 1),
       (1, 4, 0); 

insert into productos(codigo, subcat, marca, nombre, precio)
values (2, 2, 'Wurth', 'Martillo 3 Golpes', 4490);

insert into stock(prod_id, sucursal_id, stock)
values (2, 1, 9),
	   (2, 2, 25),
       (2, 3, 23),
       (2, 4, 12);

insert into productos(codigo, subcat, marca, nombre, precio)
values (3, 2, 'Wurth', 'Taladro Percutor', 59990);

insert into stock(prod_id, sucursal_id, stock)
values (3, 1, 1),
	   (3, 2, 0),
       (3, 3, 9),
       (3, 4, 2);

insert into productos(codigo, subcat, marca, nombre, precio)
values (4, 5, 'FerreTools', 'Cable Inalambrico x Metro', 3990);

insert into stock(prod_id, sucursal_id, stock)
values (4, 1, 31),
       (4, 2, 52),
       (4, 3, 23),
       (4, 4, 44);
       
*/

-- Tipo Usuarios

insert into tipo_usuario(id_tipo, nombre_tipo)
values (0, 'Administrador'),
	   (1, 'Cliente');

-- Usuarios

insert into usuarios(nombre, apellido, pass, correo, tipo_user)
values ("Bruno", "Bevilaqcua", "perroChocolo123", "brunitoAlbo666@gmail.com", 1),
       ("Daniel", "Gutierrez", "CojoJulio123", "cojitojulio@gmail.com", 0),
       ("Michele", "Mouton", "MichelleQuattro51", "michelequattro@gmail.com", 1);
       
DROP USER if exists 'user1'@'localhost';
CREATE USER 'user1'@'localhost' IDENTIFIED BY 'palomamami';
GRANT ALL PRIVILEGES ON  ferremas_db  TO 'user1'@'localhost';
GRANT SELECT ON ferremas_db.* to 'user1'@'localhost';
GRANT INSERT ON ferremas_db.* to 'user1'@'localhost';
GRANT UPDATE ON ferremas_db.productos to 'user1'@'localhost';
GRANT DELETE ON ferremas_db.productos to 'user1'@'localhost';
GRANT DELETE ON ferremas_db.stock to 'user1'@'localhost';
FLUSH PRIVILEGES;
ALTER USER 'user1'@'localhost' IDENTIFIED WITH mysql_native_password BY 'palomamami';


