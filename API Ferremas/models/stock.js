const { DataTypes } = require('sequelize')
const sequelize = require('../database/database.js').sequelize
const { Productos } = require('./productos.js')
const { Sucursal } = require('./sucursal.js')

const Stock = sequelize.define('stocks', {
    stock_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})

// Product Foreign Key

Productos.hasMany(Stock, {
    foreignKey: 'prod_id',
    sourceKey: 'codigo'
})

Stock.belongsTo(Productos, {
    foreignKey: 'prod_id',
    targetId: 'stock_id'
})

// Sucursal Foreign Key

Sucursal.hasMany(Stock, {
    foreignKey: 'sucursal_id',
    sourceKey: 'sucursal_id'
})

Stock.belongsTo(Sucursal, {
    foreignKey: 'sucursal_id',
    targetId: 'stock_id'
})

module.exports = { Stock }