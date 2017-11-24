"use strict";

module.exports = function(sequelize, DataTypes) {
  var Role = sequelize.define(
    "Role",
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      code: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN
      },
      createdDateTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedDateTime: {
        type: DataTypes.DATE
      },
      createdBy: {
        type: DataTypes.STRING
      },
      modifiedBy: {
        type: DataTypes.STRING
      },
      isDeleted: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      classMethods: {
        associate: function(models) {}
      },
      timestamps: false
    }
  );
  return Role;
};
