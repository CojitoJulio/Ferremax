const express = require('express')
const mysql = require('mysql')
const connection = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000;
const dbOptions = {
    host: 'localhost',
    prot: 3306,
    user: 'root',
    password: 'Dani1915#',
    database: 'ferremas_db'
}

// Middlewares

app.use(connection(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// Rutas


app.get('/', (req, res) => {
    res.json({ message: 'hola mundo'})
})

app.use('/api', routes);

// Server Running

app.listen((PORT), () => {
    console.log('server is listening on port http://localhost:'+ PORT)
})