"use strict";

module.exports = function(sequelize, DataTypes) {
  var UserInRole = sequelize.define(
    "UserInRole",
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
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
      }
    },
    {
      classMethods: {
        associate: function(models) {
          UserInRole.belongsTo(models.Role, {
            foreignKey: "roleId",
            targetKey: "id"
          });
          UserInRole.belongsTo(models.User, {
            foreignKey: "userId",
            targetKey: "id"
          });
        }
      },
      timestamps: false
    }
  );
  return UserInRole;
};
