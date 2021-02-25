const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Usuarios extends Model { }

Usuarios.ini({
    id_del_cliente: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefono: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    correo: {
        type: DataTypes.CHAR,
        allowNull: true
    },
    contrasenia: {
        type: DataTypes.CHAR,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Usuarios'
});