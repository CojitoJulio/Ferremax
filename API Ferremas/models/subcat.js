const { DataTypes } = require('sequelize')
const sequelize = require('../database/database.js').sequelize
const { Categorias } = require('./categorias.js')

const SubCat = sequelize.define('subcats', {
    subcat_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    subcat: {
        type: DataTypes.STRING,
        allowNull: false

    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
})


Categorias.hasMany(SubCat, {
    foreignKey: 'categoria_id',
    sourceKey: 'cate_id'
})

SubCat.belongsTo(Categorias, {
    foreignKey: 'categoria_id',
    targetId: 'subcat_id'
})

module.exports = { SubCat }