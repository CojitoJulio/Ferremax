const { DataTypes } = require('sequelize')
const sequelize = require('../database/database.js').sequelize

const Transacciones = sequelize.define('transacciones', {
    session_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numerocasa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    transaccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})


module.exports = { Transacciones }