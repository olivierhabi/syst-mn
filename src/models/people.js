"use strict";
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define(
    "People",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      motherName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fatherName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sector: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cell: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      residence: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      placeOfWork: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      placeOfIssue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      illness: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  return People;
};
