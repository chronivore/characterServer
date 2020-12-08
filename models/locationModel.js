const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define("location", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    climate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    technology: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    miscellaneous: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Location;
};
