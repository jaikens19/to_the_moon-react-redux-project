'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    symbols: DataTypes.STRING
  }, {});
  Watchlist.associate = function(models) {
    Watchlist.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Watchlist;
};



