const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Productos extends Model { }

Productos.ini({
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
    modelName: 'Productos'
});