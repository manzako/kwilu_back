'use strict';
const bcrypt = require('bcrypt');

module.exports=(sequelize,DataTypes)=>{
  const employe=sequelize.define("employe",{
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:true
      }
      // allowNull defaults to true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    }
  },{
    hooks: {
      afterValidate:(employe)=>{
        employe.pwd=bcrypt.hashSync(employe.pwd,8);
      }
    }
  });



  employe.associate=models=>{
    employe.hasMany(models.commentaire,{
      onDelete:"cascade"
    });
    employe.belongsToMany(models.vehicule, {
      through: 'employeVehicules'
    });
 
  }

  return employe;
}