'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Positions",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        symbol: {
          type: Sequelize.STRING(10),
          unique: "position_unique",
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        price: {
          type: Sequelize.DECIMAL(20, 2),
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          unique: "position_unique",
          references: { model: "Users" },
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
      },
      {
        uniqueKeys: {
          position_unique: { fields: ["symbol", "userId"] },
        },
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Positions');
  }
};