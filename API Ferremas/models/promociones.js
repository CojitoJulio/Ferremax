const { DataTypes } = require('sequelize')
const sequelize = require('../database/database.js').sequelize
const { Productos } = require('./productos.js')

const Promociones = sequelize.define('promociones', {
    promo_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    preciop: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    iniciop: {
        type: DataTypes.DATE,
        allowNull: false
    },
    finalp: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false
})

// Product Foreign Key

Productos.hasMany(Promociones, {
    foreignKey: 'producto_id',
    sourceKey: 'codigo'
})

Promociones.belongsTo(Productos, {
    foreignKey: 'producto_id',
    targetId: 'promo_id'
})


module.exports = { Promociones }