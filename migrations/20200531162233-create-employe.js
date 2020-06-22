"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.createTable("employes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pwd: {
        type: Sequelize.STRING,
        allowNull: false,
        // allowNull defaults to true
      },
      email: {
        type: Sequelize.STRING,
        // allowNull defaults to true
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        // allowNull defaults to true
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable("employes");
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
