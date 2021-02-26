"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("BuyOrders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      symbol: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(20, 2),
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
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
    return queryInterface.dropTable("BuyOrders");
  },
};
