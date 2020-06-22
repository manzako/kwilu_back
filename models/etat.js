'use strict';
module.exports=(sequelize,DataTypes)=>{
  const etat=sequelize.define("etat",{
    libelle: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });


  etat.associate=models=>{
    etat.hasMany(models.vehicule,{
      onDelete:"cascade"
    })
  }

  return etat;
}