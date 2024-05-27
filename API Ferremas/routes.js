const express = require('express');
const routes = express.Router()


// Get

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query(
            `SELECT p.codigo, sc.subcat, p.marca, p.nombre, p.precio, COALESCE(pr.preciop, 0) AS precio_promocion, sc.imagen, sc.subcat_id
            FROM productos as p 
            join subcat as sc on p.subcat = sc.subcat_id
            left join promociones as pr on pr.producto = p.codigo
            order by p.nombre;`, (err, rows) => {
            if (err) return res.send(err);

            res.json(rows)
        })
    })
})

routes.get('/stock/:codigo', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query(
            `select s.nombre, st.stock, p.nombre as producto
            from stock as st
            join sucursal as s on st.sucursal_id = s.sucursal_id
            join productos as p on st.prod_id = p.codigo
            where prod_id = ?;`, [req.params.codigo], (err, rows) => {
            if (err) return res.send(err);

            res.json(rows)
        })
    })
})

routes.get('/sucursales', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query(
            `select * from sucursal`, (err, rows) => {
                if (err) return res.send(err);

                res.json(rows)
            })
    })
})

routes.get('/categorias', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query(
            `select * from subcat;`, (err, rows) => {
                if (err) return res.send(err);

                res.json(rows)
            })
    })
})

routes.get('/usuarios', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query(
            `select u.user_id, u.nombre, u.apellido, u.pass, u.correo, u.tipo_user, tp.nombre_tipo
            from usuarios as u
            join tipo_usuario as tp
            on tp.id_tipo = u.tipo_user;`, (err, rows) => {
            if (err) return res.send(err);

            res.json(rows)
        }
        )
    })
})

routes.get('/promos', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query(
            `select p.promo_id, p.producto, pr.nombre,pr.precio, p.preciop, p.iniciop, p.finalp, sc.imagen, pr.marca
            from promociones p
            join productos pr on pr.codigo = p.producto
            join subcat sc on pr.subcat = sc.subcat_id;`, (err, rows) => {
            if (err) return res.send(err);

            res.json(rows)
        })
    })
})

routes.get('/producto/:codigo', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query(
            `select p.codigo, p.marca, p.nombre, p.precio, sc.subcat
            from productos as p
            join subcat as sc on p.subcat = sc.subcat_id
            where p.codigo = ?;`, [req.params.codigo], (err, rows) => {
            if (err) return res.send(err);

            res.json(rows)
        })
    })
})

// Post

routes.post('/agregar', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query(
            `INSERT INTO productos(codigo, subcat, marca, nombre, precio)
            values (?, ?, ?, ?, ?)`,
            [req.body.codigo, req.body.subcat, req.body.marca,
            req.body.nombre, req.body.precio], (err, rows) => {
                if (err) {

                    return res.status(400).json({
                        message: 'Error al agregar el producto',
                        error: err
                    });
                }

                res.send('Producto Agregado')
            }
        )

        var count = Object.keys(req.body.stock).length;

        for (let i = 1; i <= count; i++) {

            conn.query(
                `INSERT INTO stock(prod_id, sucursal_id, stock)
                values (?, ?, ?)`, [req.body.codigo, i, req.body.stock[i - 1], (err, rows) => {
                if (err) return res.send(err)

                res.send('Stock Ingresado')
            }]
            )
        }
    })
})

// Update

routes.put('/mod', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query(
            `UPDATE productos
            SET subcat= ?, marca= ?, nombre= ?, precio= ?
            WHERE codigo = ?;`, [req.body.subcat, req.body.marca,
        req.body.nombre, req.body.precio, req.body.codigo], (err, rows) => {
            if (err) return res.send(err);

            res.json(rows)
        })
    })
})

// Delete

routes.delete('/delete', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.status(500).send(err); // Manejar errores de conexión

        conn.query(
            `DELETE from stock 
            WHERE prod_id = ?;`, [req.body.codigo],
            (err, stockDeleteResult) => {
                if (err) return res.status(500).send(err); // Manejar errores de consulta

                conn.query(
                    `DELETE FROM productos WHERE codigo = ?;`, [req.body.codigo],
                    (err, productDeleteResult) => {
                        if (err) return res.status(500).send(err); // Manejar errores de consulta

                        res.status(200).send('Stock y producto eliminados con éxito');
                    }
                );
            }
        );
    });
});


module.exports = routes