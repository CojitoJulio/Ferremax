const express = require('express');
const routes = express.Router()


routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query(
            `SELECT p.codigo, sc.subcat, p.marca, p.nombre, p.precio
            FROM productos as p 
            join subcat as sc on p.subcat = sc.subcat_id `, (err, rows) => {
            if (err) return res.send(err);

            res.json(rows)
        })
    })
})

routes.post('/agregar', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        // conn.query(
        //     `INSERT INTO productos(codigo, subcat, marca, nombre, precio)
        //     values (?, ?, ?, ?, ?)`, 
        //     [req.body.codigo, req.body.subcat, req.body.marca,
        //         req.body.nombre, req.body.precio], (err, rows) => {
        //         if (err) return res.send(err)

        //         res.send('Producto Agregado')
        //     }
        // )

        // conn.query(
        //     `INSERT INTO stock()`
        // )

        req.body.stock.map((stock) => {
            conn.query(
                `INSERT INTO stock(prod_id, sucursal_id, stock)`
            )
        })


        console.log(req.body.nombre)

        // conn.query(
        //     `INSERT INTO productos`
        // )
    })
})

module.exports = routes