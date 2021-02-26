'use strict';
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define('Position', {
    symbol: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  }, {});
  Position.associate = function(models) {
    Position.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Position;
};