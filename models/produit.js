'use strict';
module.exports=(sequelize,DataTypes)=>{
  const produit=sequelize.define("produit",{
    type_produit: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });


  produit.associate=models=>{
    produit.hasMany(models.detail_produit,{
      onDelete:"cascade"
    });
  }

  return produit;
}
