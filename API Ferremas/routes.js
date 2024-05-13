const express = require('express');
const routes = express.Router()


// Get

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query(
            `SELECT p.codigo, sc.subcat, p.marca, p.nombre, p.precio
            FROM productos as p 
            join subcat as sc on p.subcat = sc.subcat_id
            order by p.nombre`, (err, rows) => {
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
        if (err) return res.send(err)

        conn.query(
            `DELETE from stock 
        where prod_id = ?;`, [req.body.codigo], (err, rows) => {
            if (err) return res.send(err);

            res.send('Stock Deleteado')
        }
        )


        conn.query(
            `DELETE FROM productos WHERE codigo= ? ;`, [req.body.codigo], (err, rows) => {
                if (err) return res.send(err);

                res.send('Deleteado')
            })
    })
})

module.exports = routes