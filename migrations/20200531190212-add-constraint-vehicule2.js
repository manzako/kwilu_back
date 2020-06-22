"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("vehicules", {
      fields: ["etatId"],
      type: "foreign key",
      name: "fk_etat",
      references: {
        table: "etats",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: (queryInterface, Sequelize) => {
    
  },
};
