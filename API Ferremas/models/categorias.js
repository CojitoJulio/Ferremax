const { DataTypes } = require('sequelize')
const sequelize = require('../database/database.js').sequelize

const Categorias = sequelize.define('categorias', {
    cate_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false

    }
}, {
    timestamps: false
})

module.exports = { Categorias }