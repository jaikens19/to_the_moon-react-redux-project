'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Demo",
          lastName: "lition",
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          wallet: 10.00,
        },
        {
          firstName: "Fake",
          lastName: "User1",
          email: faker.internet.email(),
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          wallet: 0.00,
        },
        {
          firstName: "Fake",
          lastName: "User2",
          email: faker.internet.email(),
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          wallet: 0.00,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};