'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ordem extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Ordem.belongsTo(models.Categoria, {
                foreigKey: 'id',
                target_key: 'idCategoria'
            })
        }
    }
    Ordem.init({
        name: DataTypes.STRING,
        ccontact: DataTypes.STRING,
        company: DataTypes.STRING,
        estateAgency: DataTypes.STRING,
        description: DataTypes.STRING,
        deadline: DataTypes.DATE,
        idCategoria: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Ordem',
    });
    return Ordem;
};