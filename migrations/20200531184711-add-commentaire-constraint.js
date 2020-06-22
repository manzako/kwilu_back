'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addConstraint('commentaires', {
    fields: ['employeId'],
    type: 'foreign key',
    name: 'fk_employe',
    references: { 
      table: 'employes',
      field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
