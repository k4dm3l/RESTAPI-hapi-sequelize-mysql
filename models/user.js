'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    citizen_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phonenumber: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};