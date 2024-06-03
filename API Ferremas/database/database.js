const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'ferremas_db',
    'prueba',
    'prueba123',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = { sequelize };