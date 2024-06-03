const { DataTypes } = require('sequelize')
const sequelize = require('../database/database.js').sequelize
const { Tipo_User } = require('./tipo_usuario.js')

const Usuarios = sequelize.define('usuarios', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false

    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false

    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})


Tipo_User.hasMany(Usuarios, {
    foreignKey: 'tipo_user',
    sourceKey: 'tipo_id'
})

Usuarios.belongsTo(Tipo_User, {
    foreignKey: 'tipo_user',
    targetId: 'user_id'
})

module.exports = { Usuarios }