'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Ordems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            ccontact: {
                type: Sequelize.STRING
            },
            company: {
                type: Sequelize.STRING
            },
            estateAgency: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            deadline: {
                type: Sequelize.DATE
            },
            idCategoria: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Categoria',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Ordems');
    }
};