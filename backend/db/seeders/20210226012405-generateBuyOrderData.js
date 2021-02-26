"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("BuyOrders", [
      {
        symbol: "AAPL",
        price: 100.0,
        status: "OPEN",
        quantity: 10,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        symbol: "GME",
        price: 100.0,
        status: "OPEN",
        quantity: 10,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("BuyOrders", null, {});
  },
};
