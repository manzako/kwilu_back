'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   
   return queryInterface.addConstraint('detail_produits', 
   {
     fields: ['vehiculeId'],
     type: 'foreign key',
     name: 'fk_vehicule',
     references: { 
       table: 'vehicules',
       field: 'id'
     },
     onDelete: 'cascade',
     onUpdate: 'cascade'
   });

  },

  down: (queryInterface, Sequelize) => {
   
  }
};
