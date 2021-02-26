"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Positions", [
      {
        symbol: "AAPL",
        quantity: 10,
        price: 100.0,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        symbol: "GME",
        quantity: 10,
        price: 100.0,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Positions", null, {});
  },
};

