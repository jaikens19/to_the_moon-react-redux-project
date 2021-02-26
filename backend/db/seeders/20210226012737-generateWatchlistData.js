"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Watchlists", [
      {
        name: "Test",
        symbols: ["AAPL, GME, GOOG"],
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Watchlists", null, {});
  },
};
