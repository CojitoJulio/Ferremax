insert into sucursales(nombre, direccion)
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
       
insert into subcats(categoria_id, subcat, imagen)
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
insert into productos(codigo, subcat_id, marca, nombre, precio)
values 
(1, 1, 'Fischer', 'Tornillo para Madera', 300),
(2, 5, 'Stanley', 'Martillo de Carpintero', 5500),
(3, 2, 'DeWalt', 'Lijadora Orbital', 8800),
(4, 3, 'Makita', 'Destornillador Eléctrico', 7500),
(5, 2, 'Black & Decker', 'Llave Ajustable', 4300),
(6, 2, 'Bosch', 'Sierra Circular', 11900),
(7, 7, 'Hilti', 'Martillo Demoledor', 24500),
(8, 2, 'Dremel', 'Herramienta Rotativa', 9200),
(9, 2, 'Makita', 'Taladro Percutor', 13500),
(10, 2, 'Klein', 'Llave Inglesa', 4800),
(11, 8, 'Black & Decker', 'Taladro Atornillador', 11700),
(12, 2, 'Dewalt', 'Taladro de Impacto', 12800),
(13, 2, 'Makita', 'Sierra de Calar', 10200),
(14, 3, 'Indura', 'Soldadura en Polvo', 2500),
(15, 6, 'Ceresita', 'Pintura Blanca', 6800),
(16, 3, 'Tricolor', 'Barniz Marino', 7900),
(17, 8, 'Maestro', 'Cemento Portland', 5500),
(18, 7, 'Arena', 'Arena Gruesa', 1200),
(19, 5, 'Maestro', 'Ladrillos Comunes', 400),
(20, 9, 'Indura', 'Cables Eléctricos', 3000),
(21, 10, 'Tricolor', 'Barniz Poliuretano', 8200),
(22, 12, 'Tricolor', 'Pintura de Interiores', 7800),
(23, 6, '3M', 'Lentes de Seguridad', 1500),
(24, 9, '3M', 'Cascos de Seguridad', 3500),
(25, 9, 'Petzl', 'Guantes para Construcción', 2500),
(26, 4, 'Petzl', 'Guantes Anticorte', 3000),
(27, 5, 'Stanley', 'Medidor Láser', 4500),
(28, 6, 'Stanley', 'Huincha Métrica', 1500),
(29, 8, 'Bosch', 'Nivel Láser', 9700),
(30, 6, 'Bosch', 'Medidor de Distancia', 8800);



-- Stock
insert into stocks(prod_id, sucursal_id, stock)
values 
(1, 1, 45), (1, 2, 12), (1, 3, 1), (1, 4, 0),
(2, 1, 30), (2, 2, 20), (2, 3, 10), (2, 4, 5),
(3, 1, 50), (3, 2, 40), (3, 3, 30), (3, 4, 20),
(4, 1, 25), (4, 2, 15), (4, 3, 10), (4, 4, 5),
(5, 1, 60), (5, 2, 50), (5, 3, 40), (5, 4, 30),
(6, 1, 35), (6, 2, 25), (6, 3, 15), (6, 4, 5),
(7, 1, 45), (7, 2, 35), (7, 3, 25), (7, 4, 15),
(8, 1, 40), (8, 2, 30), (8, 3, 20), (8, 4, 10),
(9, 1, 20), (9, 2, 15), (9, 3, 10), (9, 4, 5),
(10, 1, 100), (10, 2, 90), (10, 3, 80), (10, 4, 70),
(11, 1, 10), (11, 2, 8), (11, 3, 6), (11, 4, 4),
(12, 1, 60), (12, 2, 50), (12, 3, 40), (12, 4, 30),
(13, 1, 30), (13, 2, 20), (13, 3, 10), (13, 4, 5),
(14, 1, 80), (14, 2, 70), (14, 3, 60), (14, 4, 50),
(15, 1, 50), (15, 2, 40), (15, 3, 30), (15, 4, 20),
(16, 1, 15), (16, 2, 12), (16, 3, 10), (16, 4, 8),
(17, 1, 100), (17, 2, 90), (17, 3, 80), (17, 4, 70),
(18, 1, 150), (18, 2, 140), (18, 3, 130), (18, 4, 120),
(19, 1, 200), (19, 2, 180), (19, 3, 160), (19, 4, 140),
(20, 1, 50), (20, 2, 40), (20, 3, 30), (20, 4, 20),
(21, 1, 20), (21, 2, 15), (21, 3, 10), (21, 4, 5),
(22, 1, 30), (22, 2, 25), (22, 3, 20), (22, 4, 15),
(23, 1, 60), (23, 2, 50), (23, 3, 40), (23, 4, 30),
(24, 1, 25), (24, 2, 20), (24, 3, 15), (24, 4, 10),
(25, 1, 70), (25, 2, 60), (25, 3, 50), (25, 4, 40),
(26, 1, 15), (26, 2, 12), (26, 3, 10), (26, 4, 8),
(27, 1, 45), (27, 2, 35), (27, 3, 25), (27, 4, 15),
(28, 1, 55), (28, 2, 45), (28, 3, 35), (28, 4, 25),
(29, 1, 20), (29, 2, 15), (29, 3, 10), (29, 4, 5),
(30, 1, 30), (30, 2, 25), (30, 3, 20), (30, 4, 15);

-- Productos
insert into productos(codigo, subcat_id, marca, nombre, precio)
values 
(31, 1, 'Hilti', 'Tornillo Autotaladrante', 400),
(32, 2, 'Stanley', 'Martillo de Bola', 5700),
(33, 3, 'DeWalt', 'Lijadora de Banda', 9400),
(34, 4, 'Makita', 'Destornillador de Impacto', 8300),
(35, 5, 'Black & Decker', 'Llave de Tuercas', 4600),
(36, 6, 'Bosch', 'Sierra de Mesa', 15500),
(37, 7, 'Hilti', 'Martillo Perforador', 21000),
(38, 8, 'Dremel', 'Mini Herramienta Rotativa', 9500),
(39, 9, 'Makita', 'Taladro de Columna', 16500),
(40, 10, 'Klein', 'Llave para Tuberías', 5000),
(41, 11, 'Black & Decker', 'Taladro Eléctrico', 11200),
(42, 12, 'Dewalt', 'Atornillador de Impacto', 11800),
(43, 13, 'Makita', 'Sierra de Inglete', 14200),
(44, 14, 'Indura', 'Soldadura Mig', 2700),
(45, 15, 'Ceresita', 'Pintura Esmalte', 7200),
(46, 16, 'Tricolor', 'Barniz Sintético', 8100),
(47, 17, 'Maestro', 'Cemento de Alta Resistencia', 6000),
(48, 18, 'Arena', 'Arena Fina', 1500),
(49, 19, 'Maestro', 'Ladrillos Refractarios', 600),
(50, 20, 'Indura', 'Cables Subterráneos', 3400),
(51, 21, 'Tricolor', 'Barniz Antideslizante', 8700),
(52, 22, 'Tricolor', 'Pintura Exterior', 8200),
(53, 23, '3M', 'Lentes de Protección', 1800),
(54, 1, '3M', 'Cascos de Obra', 3800),
(55, 2, 'Petzl', 'Guantes de Seguridad', 2800),
(56, 3, 'Petzl', 'Guantes Resistentes a Cortes', 3300),
(57, 4, 'Stanley', 'Medidor Ultrasónico', 4700),
(58, 5, 'Stanley', 'Cinta Métrica', 1700),
(59, 6, 'Bosch', 'Nivel Electrónico', 10000),
(60, 7, 'Bosch', 'Medidor de Espesor', 9200);

-- Stock
insert into stocks(prod_id, sucursal_id, stock)
values 
(31, 1, 50), (31, 2, 40), (31, 3, 30), (31, 4, 20),
(32, 1, 35), (32, 2, 25), (32, 3, 15), (32, 4, 5),
(33, 1, 45), (33, 2, 35), (33, 3, 25), (33, 4, 15),
(34, 1, 30), (34, 2, 20), (34, 3, 10), (34, 4, 5),
(35, 1, 50), (35, 2, 40), (35, 3, 30), (35, 4, 20),
(36, 1, 20), (36, 2, 15), (36, 3, 10), (36, 4, 5),
(37, 1, 10), (37, 2, 8), (37, 3, 6), (37, 4, 4),
(38, 1, 40), (38, 2, 30), (38, 3, 20), (38, 4, 10),
(39, 1, 15), (39, 2, 12), (39, 3, 10), (39, 4, 8),
(40, 1, 60), (40, 2, 50), (40, 3, 40), (40, 4, 30),
(41, 1, 25), (41, 2, 20), (41, 3, 15), (41, 4, 10),
(42, 1, 30), (42, 2, 25), (42, 3, 20), (42, 4, 15),
(43, 1, 20), (43, 2, 15), (43, 3, 10), (43, 4, 5),
(44, 1, 70), (44, 2, 60), (44, 3, 50), (44, 4, 40),
(45, 1, 55), (45, 2, 45), (45, 3, 35), (45, 4, 25),
(46, 1, 35), (46, 2, 25), (46, 3, 15), (46, 4, 5),
(47, 1, 100), (47, 2, 90), (47, 3, 80), (47, 4, 70),
(48, 1, 150), (48, 2, 140), (48, 3, 130), (48, 4, 120),
(49, 1, 200), (49, 2, 180), (49, 3, 160), (49, 4, 140),
(50, 1, 50), (50, 2, 40), (50, 3, 30), (50, 4, 20),
(51, 1, 30), (51, 2, 25), (51, 3, 20), (51, 4, 15),
(52, 1, 45), (52, 2, 35), (52, 3, 25), (52, 4, 15),
(53, 1, 60), (53, 2, 50), (53, 3, 40), (53, 4, 30),
(54, 1, 30), (54, 2, 20), (54, 3, 10), (54, 4, 5),
(55, 1, 80), (55, 2, 70), (55, 3, 60), (55, 4, 50),
(56, 1, 50), (56, 2, 40), (56, 3, 30), (56, 4, 20),
(57, 1, 50), (57, 2, 40), (57, 3, 30), (57, 4, 20),
(58, 1, 70), (58, 2, 60), (58, 3, 50), (58, 4, 40),
(59, 1, 15), (59, 2, 12), (59, 3, 10), (59, 4, 8),
(60, 1, 20), (60, 2, 15), (60, 3, 10), (60, 4, 5);


-- Promociones
insert into promociones(producto_id, preciop, iniciop, finalp)
values 
(1, 2200, '2024-06-01', '2024-06-30'),
(3, 8700, '2024-06-05', '2024-06-25'),
(5, 4400, '2024-06-10', '2024-06-20'),
(7, 19500, '2024-06-15', '2024-06-30'),
(9, 15000, '2024-06-01', '2024-06-15'),
(11, 10700, '2024-06-05', '2024-06-25'),
(13, 13500, '2024-06-10', '2024-06-20'),
(15, 6900, '2024-06-15', '2024-06-30'),
(17, 5700, '2024-06-01', '2024-06-15'),
(19, 540, '2024-06-05', '2024-06-25'),
(21, 3200, '2024-06-10', '2024-06-20'),
(23, 8000, '2024-06-15', '2024-06-30'),
(25, 3600, '2024-06-01', '2024-06-15'),
(27, 900, '2024-06-05', '2024-06-25'),
(29, 9300, '2024-06-10', '2024-06-20'),
(31, 350, '2024-06-15', '2024-06-30'),
(33, 8900, '2024-06-01', '2024-06-15'),
(35, 4300, '2024-06-05', '2024-06-25'),
(37, 20000, '2024-06-10', '2024-06-20'),
(39, 15800, '2024-06-15', '2024-06-30');


insert into tipo_usuarios(tipo_id, nombre_tipo)
values (0, 'Administrador'),
	   (1, 'Cliente');

-- Usuarios

insert into usuarios(nombre, apellido, pass, correo, tipo_user)
values ("Bruno", "Bevilaqcua", "perroChocolo123", "brunitoAlbo666@gmail.com", 1),
       ("Daniel", "Gutierrez", "CojoJulio123", "cojitojulio@gmail.com", 0),
       ("Michele", "Mouton", "MichelleQuattro51", "michelequattro@gmail.com", 1);