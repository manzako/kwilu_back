'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addConstraint('detail_produits', 
   {
     fields: ['produitId'],
     type: 'foreign key',
     name: 'fk_produit',
     references: { 
       table: 'produits',
       field: 'id'
     },
     onDelete: 'cascade',
     onUpdate: 'cascade'
   });
  },

  down: (queryInterface, Sequelize) => {
   
  }
};
