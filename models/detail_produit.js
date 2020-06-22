'use strict';
module.exports=(sequelize,DataTypes)=>{
    const detail_produit=sequelize.define("detail_produit",{
      ref_bon: {
        type: DataTypes.STRING,
      },
      quantite: {
        type: DataTypes.INTEGER,
      },
      photo_bon:{
        type:DataTypes.STRING
      }
    });
  
  
    detail_produit.associate=models=>{
      detail_produit.belongsTo(models.client,{
        foreignKey:{
          allowNull:false
        }
      });
      detail_produit.belongsTo(models.produit,{
        foreignKey:{
          allowNull:false
        }
      });
      detail_produit.belongsTo(models.vehicule,{
        foreignKey:{
          allowNull:false
        }
      });
    }
  
    return detail_produit;
  }
  