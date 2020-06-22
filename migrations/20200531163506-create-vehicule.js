"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("vehicules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      numero_plaque: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transporteur: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo_vehicule: {
        type: Sequelize.STRING,
      },
      marque: {
        type: Sequelize.STRING,
      },
      heure_parking: {
        type: Sequelize.DATE,
      },
      heure_chargement: {
        type: Sequelize.DATE,
      },
      heure_charge: {
        type: Sequelize.DATE,
      },
      employeId: {
        type: Sequelize.INTEGER,
      },
      etatId: {
        type: Sequelize.INTEGER,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable("vehicules");
  },
};
