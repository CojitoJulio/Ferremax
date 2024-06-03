const express = require('express')
const cors = require('cors')
const { sequelize } = require('./database/database.js')
require('./models/tipo_usuario.js')
require('./models/usuarios.js')
require('./models/categorias.js')
require('./models/sucursal.js')
require('./models/subcat.js')
require('./models/productos.js')
require('./models/stock.js')
require('./models/promociones.js')

const routes = require('./routes')
const routestb = require('./routestb')

const app = express()
const PORT = process.env.PORT || 3000;
// const dbOptions = {
//     host: 'localhost',
//     prot: 3306,
//     user: 'user1',
//     password: 'palomamami',
//     database: 'ferremas_db'
// }

// Middlewares

// app.use(connection(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// Rutas

app.get('/', (req, res) => {
    res.json({ message: 'API is running' })
})

app.use('/api', routes);

app.use('/transbank', routestb)

// Server Running

async function main() {
    try {
        await sequelize.sync({ alter: true }) // Quitar force cuando este listo


        app.listen((PORT), () => {
            console.log('server is listening on port http://localhost:' + PORT)
        })
    } catch (error) {
        console.log('Error')
        console.log(error)
    }
}

main()