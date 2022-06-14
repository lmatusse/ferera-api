'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Categoria extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Categoria.hasMany(models.Ordem, {
                foreignKey: 'idCategoria'
            })
        }
    }
    Categoria.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Categoria',
    });

    return Categoria;
};