-- Insertar productos
insert into productos(codigo, subcat, marca, nombre, precio)
values (1, 4, 'Indura', 'Soldadura en Polvo', 2500),
       (2, 5, 'Bosch', 'Taladro Inalámbrico', 12500),
       (3, 3, 'Truper', 'Martillo Carpintero', 800),
       (4, 2, 'DeWalt', 'Sierra Circular', 8500),
       (5, 1, 'Stanley', 'Destornillador Phillips', 450),
       (6, 3, 'Makita', 'Lijadora Orbital', 3200),
       (7, 5, 'Black & Decker', 'Amoladora Angular', 4700),
       (8, 4, '3M', 'Mascarilla Respiratoria', 1500),
       (9, 2, 'Karcher', 'Hidrolavadora', 13500),
       (10, 1, 'Irwin', 'Alicates Universales', 600);

-- Insertar stock para el producto 1
insert into stock(prod_id, sucursal_id, stock)
values (1, 1, 45),
       (1, 2, 12),
       (1, 3, 1),
       (1, 4, 0);

-- Insertar stock para el producto 2
insert into stock(prod_id, sucursal_id, stock)
values (2, 1, 20),
       (2, 2, 5),
       (2, 3, 15),
       (2, 4, 3);

-- Insertar stock para el producto 3
insert into stock(prod_id, sucursal_id, stock)
values (3, 1, 30),
       (3, 2, 25),
       (3, 3, 10),
       (3, 4, 5);

-- Insertar stock para el producto 4
insert into stock(prod_id, sucursal_id, stock)
values (4, 1, 10),
       (4, 2, 7),
       (4, 3, 8),
       (4, 4, 6);

-- Insertar stock para el producto 5
insert into stock(prod_id, sucursal_id, stock)
values (5, 1, 50),
       (5, 2, 45),
       (5, 3, 20),
       (5, 4, 30);

-- Insertar stock para el producto 6
insert into stock(prod_id, sucursal_id, stock)
values (6, 1, 15),
       (6, 2, 5),
       (6, 3, 3),
       (6, 4, 10);

-- Insertar stock para el producto 7
insert into stock(prod_id, sucursal_id, stock)
values (7, 1, 8),
       (7, 2, 12),
       (7, 3, 7),
       (7, 4, 2);

-- Insertar stock para el producto 8
insert into stock(prod_id, sucursal_id, stock)
values (8, 1, 35),
       (8, 2, 20),
       (8, 3, 10),
       (8, 4, 5);

-- Insertar stock para el producto 9
insert into stock(prod_id, sucursal_id, stock)
values (9, 1, 4),
       (9, 2, 3),
       (9, 3, 5),
       (9, 4, 2);

-- Insertar stock para el producto 10
insert into stock(prod_id, sucursal_id, stock)
values (10, 1, 25),
       (10, 2, 18),
       (10, 3, 12),
       (10, 4, 6);

-- Insertar productos adicionales
insert into productos(codigo, subcat, marca, nombre, precio)
values (11, 2, 'Bosch', 'Lijadora de Banda', 6500),
       (12, 4, 'Stanley', 'Cinta Métrica', 700),
       (13, 5, 'DeWalt', 'Esmeriladora', 5400),
       (14, 3, 'Makita', 'Atornillador Eléctrico', 3500),
       (15, 1, 'Truper', 'Llave Ajustable', 1200),
       (16, 5, 'Indura', 'Careta para Soldar', 2000),
       (17, 2, 'Klein Tools', 'Multímetro Digital', 4500),
       (18, 4, 'Black & Decker', 'Sierra de Calar', 5800),
       (19, 3, 'Irwin', 'Pinza de Presión', 1600),
       (20, 1, 'Bosch', 'Cortador de Cerámica', 7500),
       (21, 2, 'Stanley', 'Nivel Láser', 8200),
       (22, 4, 'Truper', 'Guantes de Trabajo', 900),
       (23, 5, 'DeWalt', 'Compresor de Aire', 11000),
       (24, 3, 'Makita', 'Soplador de Hojas', 8700),
       (25, 1, 'Irwin', 'Brocas para Madera', 650),
       (26, 2, 'Karcher', 'Aspiradora Industrial', 9200),
       (27, 4, '3M', 'Cinta Aislante', 300),
       (28, 3, 'Black & Decker', 'Taladro Percutor', 6800),
       (29, 5, 'Indura', 'Electrodo de Soldadura', 1800),
       (30, 1, 'Stanley', 'Cepillo de Carpintero', 1350);

-- Insertar stock para el producto 11
insert into stock(prod_id, sucursal_id, stock)
values (11, 1, 15),
       (11, 2, 7),
       (11, 3, 10),
       (11, 4, 5);

-- Insertar stock para el producto 12
insert into stock(prod_id, sucursal_id, stock)
values (12, 1, 50),
       (12, 2, 35),
       (12, 3, 20),
       (12, 4, 10);

-- Insertar stock para el producto 13
insert into stock(prod_id, sucursal_id, stock)
values (13, 1, 10),
       (13, 2, 5),
       (13, 3, 8),
       (13, 4, 2);

-- Insertar stock para el producto 14
insert into stock(prod_id, sucursal_id, stock)
values (14, 1, 20),
       (14, 2, 10),
       (14, 3, 15),
       (14, 4, 7);

-- Insertar stock para el producto 15
insert into stock(prod_id, sucursal_id, stock)
values (15, 1, 30),
       (15, 2, 25),
       (15, 3, 12),
       (15, 4, 8);

-- Insertar stock para el producto 16
insert into stock(prod_id, sucursal_id, stock)
values (16, 1, 18),
       (16, 2, 14),
       (16, 3, 5),
       (16, 4, 3);

-- Insertar stock para el producto 17
insert into stock(prod_id, sucursal_id, stock)
values (17, 1, 12),
       (17, 2, 6),
       (17, 3, 9),
       (17, 4, 4);

-- Insertar stock para el producto 18
insert into stock(prod_id, sucursal_id, stock)
values (18, 1, 25),
       (18, 2, 10),
       (18, 3, 15),
       (18, 4, 5);

-- Insertar stock para el producto 19
insert into stock(prod_id, sucursal_id, stock)
values (19, 1, 22),
       (19, 2, 12),
       (19, 3, 10),
       (19, 4, 6);

-- Insertar stock para el producto 20
insert into stock(prod_id, sucursal_id, stock)
values (20, 1, 8),
       (20, 2, 4),
       (20, 3, 6),
       (20, 4, 2);

-- Insertar stock para el producto 21
insert into stock(prod_id, sucursal_id, stock)
values (21, 1, 14),
       (21, 2, 7),
       (21, 3, 10),
       (21, 4, 3);

-- Insertar stock para el producto 22
insert into stock(prod_id, sucursal_id, stock)
values (22, 1, 35),
       (22, 2, 20),
       (22, 3, 15),
       (22, 4, 8);

-- Insertar stock para el producto 23
insert into stock(prod_id, sucursal_id, stock)
values (23, 1, 12),
       (23, 2, 5),
       (23, 3, 8),
       (23, 4, 3);

-- Insertar stock para el producto 24
insert into stock(prod_id, sucursal_id, stock)
values (24, 1, 10),
       (24, 2, 4),
       (24, 3, 7),
       (24, 4, 2);

-- Insertar stock para el producto 25
insert into stock(prod_id, sucursal_id, stock)
values (25, 1, 40),
       (25, 2, 25),
       (25, 3, 15),
       (25, 4, 10);

-- Insertar stock para el producto 26
insert into stock(prod_id, sucursal_id, stock)
values (26, 1, 8),
       (26, 2, 3),
       (26, 3, 6),
       (26, 4, 2);

-- Insertar stock para el producto 27
insert into stock(prod_id, sucursal_id, stock)
values (27, 1, 55),
       (27, 2, 35),
       (27, 3, 20),
       (27, 4, 10);

-- Insertar stock para el producto 28
insert into stock(prod_id, sucursal_id, stock)
values (28, 1, 12),
       (28, 2, 6),
       (28, 3, 9),
       (28, 4, 4);

-- Insertar stock para el producto 29
insert into stock(prod_id, sucursal_id, stock)
values (29, 1, 30),
       (29, 2, 18),
       (29, 3, 12),
       (29, 4, 6);

-- Insertar stock para el producto 30
insert into stock(prod_id, sucursal_id, stock)
values (30, 1, 22),
       (30, 2, 15),
       (30, 3, 10),
       (30, 4, 5);


-- Promociones

-- Insertar promociones
insert into promociones(producto, preciop, iniciop, finalp)
values (1, 2200, '2024-06-01', '2024-06-15'),
       (2, 11500, '2024-06-01', '2024-06-10'),
       (3, 700, '2024-06-05', '2024-06-20'),
       (4, 8000, '2024-06-01', '2024-06-07'),
       (8, 1300, '2024-06-01', '2024-06-08'),
       (9, 12500, '2024-06-01', '2024-06-10'),
       (10, 550, '2024-06-15', '2024-06-30'),
       (13, 5000, '2024-06-05', '2024-06-15'),
       (14, 3200, '2024-06-01', '2024-06-12'),
       (16, 1800, '2024-06-01', '2024-06-08'),
       (23, 10500, '2024-06-01', '2024-06-10'),
       (24, 8000, '2024-06-01', '2024-06-15'),
       (25, 600, '2024-06-10', '2024-06-25'),
       (26, 8800, '2024-06-01', '2024-06-10'),
       (27, 250, '2024-06-01', '2024-06-07'),
       (30, 1200, '2024-06-05', '2024-06-15');
