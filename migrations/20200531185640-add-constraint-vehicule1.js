'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
   return queryInterface.addConstraint('vehicules',{
    fields: ['employeId'],
    type: 'foreign key',
    name: 'fk_employ',
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
