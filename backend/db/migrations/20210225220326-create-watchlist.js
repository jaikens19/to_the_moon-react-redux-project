'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Watchlists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      symbols: {
        type: Sequelize.ARRAY(Sequelize.STRING(20)),
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users' },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Watchlists');
  }
};