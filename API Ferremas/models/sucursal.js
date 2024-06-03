const { DataTypes } = require('sequelize')
const sequelize = require('../database/database.js').sequelize

const Sucursal = sequelize.define('sucursales', {
    sucursal_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false

    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})


module.exports = { Sucursal }