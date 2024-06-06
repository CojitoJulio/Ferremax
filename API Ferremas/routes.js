const express = require('express');
const { Productos } = require('./models/productos');
const { Stock } = require('./models/stock');
const { sequelize } = require('./database/database');
const { SubCat } = require('./models/subcat');
const { Promociones } = require('./models/promociones');
const { Sucursal } = require('./models/sucursal');
const { Categorias } = require('./models/categorias');
const { Usuarios } = require('./models/usuarios');
const { Tipo_User } = require('./models/tipo_usuario');
const { Transacciones } = require('./models/transacciones');
const routes = express.Router()

// Get

routes.get('/', async (req, res) => {
    try {
        const products = await Productos.findAll({
            attributes: [
                'codigo',
                'marca',
                'nombre',
                'precio',
                [sequelize.literal('COALESCE(`Promociones`.`preciop`, 0)'), 'precio_promocion'],

            ],
            include: [
                {
                    model: SubCat,
                    attributes: ['subcat', 'imagen', 'subcat_id']
                },
                {
                    model: Promociones,
                    attributes: []
                }
            ],
            order: [['nombre', 'ASC']]

        })
        res.json(products)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

routes.get('/stock/:codigo', async (req, res) => {
    try {
        const codigo = req.params.codigo;
        const stockData = await Stock.findAll({
            attributes: ['stock'],
            include: [
                {
                    model: Sucursal,
                    attributes: ['nombre']
                },
                {
                    model: Productos,
                    attributes: ['nombre']
                }
            ],
            where: {
                prod_id: codigo
            }
        })

        res.json(stockData)


    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


routes.get('/sucursales', async (req, res) => {
    try {
        const stockData = await Sucursal.findAll()
        res.json(stockData)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

routes.get('/categorias', async (req, res) => {
    try {
        const stockData = await SubCat.findAll()
        res.json(stockData)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

routes.get('/transaccionesok', async (req, res) => {
    try {
        const transaccionesData = await Transacciones.findAll()
        res.json(transaccionesData)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

routes.get('/usuarios', async (req, res) => {
    try {
        const stockData = await Usuarios.findAll({
            attributes: ['user_id', 'nombre', 'apellido', 'pass', 'correo', 'tipo_user'],
            include: [
                {
                    model: Tipo_User,
                    attributes: ['nombre_tipo']
                }
            ]
        })
        res.json(stockData)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

routes.get('/promos', async (req, res) => {
    try {
        const stockData = await Promociones.findAll({
            attributes: ['promo_id', 'producto_id', 'preciop', 'iniciop', 'finalp'],
            include: [
                {
                    model: Productos,
                    attributes: ['nombre', 'marca'],
                    include: [
                        {
                            model: SubCat,
                            attributes: ['imagen']
                        }
                    ]
                }
            ]
        })
        res.json(stockData)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

routes.get('/producto/:codigo', async (req, res) => {

    try {
        const codigo = req.params.codigo

        const products = await Productos.findAll({
            attributes: [
                'codigo',
                'marca',
                'nombre',
                'precio',
                [sequelize.literal('COALESCE(`Promociones`.`preciop`, 0)'), 'precio_promocion'],
            ],
            include: [
                {
                    model: SubCat,
                    attributes: ['subcat', 'subcat_id']
                },
                {
                    model: Promociones,
                    attributes: []
                }
            ],
            where: {
                codigo: codigo
            }

        })
        res.json(products)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

routes.get('/dolar', async (req, res) => {
    let currentDate = new Date().toJSON().slice(0, 10);
    let serie = 'F073.TCO.PRE.Z.D'


    try {
        const response = await fetch(`https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx?user=dani.gutierrezg@duocuc.cl&pass=Completo123&firstdate=${currentDate}&lastdate=${currentDate}&timeseries=${serie}&function=GetSeries`)
        if (!response.ok) {
            throw new Error('Error al obtener el dolarsito bb')
        }
        const dolarData = await response.json();

        res.json(dolarData)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Post

routes.post('/agregar', async (req, res) => {
    try {
        const { codigo, nombre, marca, precio, subcat_id, stock } = req.body

        const newProduct = await Productos.create({
            codigo: codigo,
            nombre: nombre,
            marca: marca,
            precio: precio,
            subcat_id: subcat_id
        })

        var count = Object.keys(stock).length;

        for (let i = 1; i <= count; i++) {
            const newStock = await Stock.create({
                stock: stock[i - 1],
                prod_id: codigo,
                sucursal_id: i
            })

        }

        res.send('Producto Agregado')

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

})

routes.post('/transacciones', async (req, res) => {
    try {
        const { nombre, apellido, correo, telefono, direccion, numerocasa, transaccion, session_id } = req.body

        const newTransaccion = await Transacciones.create({
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            direccion: direccion,
            numerocasa: numerocasa,
            transaccion: transaccion,
            session_id: session_id
        })

        res.send('Transaccion Agregada')

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

})

// Update

routes.put('/mod', async (req, res) => {
    try {
        const { subcat_id, marca, nombre, precio, codigo } = req.body

        const prod = await Productos.findByPk(codigo)
        prod.nombre = nombre
        prod.marca = marca
        prod.precio = precio
        prod.subcat_id = subcat_id

        await prod.save()

        res.json(prod)

        console.log(prod)
        console.log('Modificado')

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

routes.put('/modtransacciones', async (req, res) => {
    try {
        const { nombre, apellido, correo, telefono, direccion, numerocasa, transaccion, session_id } = req.body

        const trans = await Productos.findByPk(codigo)
        trans.nombre = nombre
        trans.apellido = apellido
        trans.correo = correo
        trans.telefono = telefono
        trans.direccion = direccion
        trans.numerocasa = numerocasa
        trans.transaccion = transaccion
        trans.session_id = session_id

        await trans.save()

        res.json(trans)

        console.log(trans)
        console.log('Modificado')

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Delete

routes.delete('/delete', async (req, res) => {
    try {
        const { codigo } = req.body

        await Productos.destroy({
            where: {
                codigo
            }
        })

        res.json('Se elimino')

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = routes