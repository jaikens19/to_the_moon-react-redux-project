'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("MarketDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stockId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        references: { model: "Stock" },
      },
      assets: {
        type: Sequelize.INTEGER,
      },
      debt: {
        type: Sequelize.INTEGER,
      },
      dividendYield: {
        type: Sequelize.DECIMAL(6, 3),
      },
      grossProfit: {
        type: Sequelize.INTEGER,
      },
      inventory: {
        type: Sequelize.INTEGER,
      },
      netIncome: {
        type: Sequelize.INTEGER,
      },
      profitMargin: {
        type: Sequelize.DECIMAL(6, 3),
      },
      operatingExpenses: {
        type: Sequelize.INTEGER,
      },
      operatingIncome: {
        type: Sequelize.INTEGER,
      },
      priceEarnings: {
        type: Sequelize.DECIMAL(6, 3),
      },
      priceToEarningsRatio: {
        type: Sequelize.DECIMAL(6, 3),
      },
      revenues: {
        type: Sequelize.INTEGER,
      },
      shares: {
        type: Sequelize.INTEGER,
      },
      incomeTaxExpense: {
        type: Sequelize.INTEGER,
      },
      workingCapital: {
        type: Sequelize.INTEGER,
      },
      salesPerShare: {
        type: Sequelize.DECIMAL(6, 3),
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
    return queryInterface.dropTable('MarketDetails');
  }
};