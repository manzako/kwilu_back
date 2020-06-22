'use strict';
module.exports=(sequelize,DataTypes)=>{
  const vehicule=sequelize.define("vehicule",{
    numero_plaque: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transporteur: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo_vehicule: {
      type: DataTypes.STRING,
    },
    marque: {
      type: DataTypes.STRING,
    },
    heure_parking: {
      type: DataTypes.DATE,
    },
    heure_chargement: {
      type: DataTypes.DATE,
    },
    heure_charge: {
      type: DataTypes.DATE,
    }
  });


  vehicule.associate=models=>{
    vehicule.belongsTo(models.etat,{
      foreignKey:{
        allowNull:false
      }
    });
    vehicule.belongsToMany(models.employe, {
      through: 'employeVehicules'
    });
  }

  return vehicule;
}
