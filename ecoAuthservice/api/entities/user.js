"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      userName: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      passwordSalt: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      isLockedOut: {
        type: DataTypes.BOOLEAN
      },
      isDisabled: {
        type: DataTypes.BOOLEAN
      },
      fullName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      createdDateTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedDateTime: {
        type: DataTypes.DATE
      },
      lastLoginDate: {
        type: DataTypes.DATE
      },
      lastPasswordChangeDate: {
        type: DataTypes.DATE
      },
      failedPasswordDate: {
        type: DataTypes.DATE
      },
      failedPasswordCount: {
        type: DataTypes.INTEGER(11)
      },
      lastLogOutDate: {
        type: DataTypes.DATE
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      telephone: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      expiryDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER(11)
      },
      createdToken: {
        type: DataTypes.DATE
      },
      token: {
        type: DataTypes.STRING(300)
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
          User.hasMany(models.UserInRole, {
            foreignKey: "userId",
            sourceKey: "id"
          });
        }
      },
      timestamps: false
    }
  );
  return User;
};
