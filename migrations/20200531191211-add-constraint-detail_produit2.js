'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addConstraint('detail_produits', 
   {
     fields: ['clientId'],
     type: 'foreign key',
     name: 'fk_client',
     references: { 
       table: 'clients',
       field: 'id'
     },
     onDelete: 'cascade',
     onUpdate: 'cascade'
   });

  },

  down: (queryInterface, Sequelize) => {
   
  }
};
