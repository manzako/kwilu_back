'use strict';
module.exports=(sequelize,DataTypes)=>{
  const client=sequelize.define("client",{
    nom_client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adresse: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:{
          msg:"entrer un email svp"
        }
      }
      // allowNull defaults to true
    }
  });

  return client;
}