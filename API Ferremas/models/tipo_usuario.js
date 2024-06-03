const { DataTypes } = require('sequelize')
const sequelize = require('../database/database.js').sequelize

const Tipo_User = sequelize.define('tipo_usuarios', {
    tipo_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre_tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})



module.exports = { Tipo_User }