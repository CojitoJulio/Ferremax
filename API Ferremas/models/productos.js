const { DataTypes } = require('sequelize')
const sequelize = require('../database/database.js').sequelize
const { SubCat } = require('./subcat.js')

const Productos = sequelize.define('productos', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false

    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})

SubCat.hasMany(Productos, {
    foreignKey: 'subcat_id',
    sourceKey: 'subcat_id'
})

Productos.belongsTo(SubCat, {
    foreignKey: 'subcat_id',
    targetId: 'codigo'
})

module.exports = { Productos }