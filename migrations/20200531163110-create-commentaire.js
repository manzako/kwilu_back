"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("commentaires", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      contenu: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      employeId: {
        type: Sequelize.DataTypes.INTEGER,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable("commentaires");
  },
};
