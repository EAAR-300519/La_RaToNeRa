const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Carrito extends Model { }

Carrito.ini({
    nombre_del_producto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_del_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true
    },
    precio_del_producto: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Carrito'
})   
