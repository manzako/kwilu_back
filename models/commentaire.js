'use strict';
module.exports=(sequelize,DataTypes)=>{
  const commentaire=sequelize.define("commentaire",{
    contenu: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE
      }
  });


  commentaire.associate=models=>{
    commentaire.belongsTo(models.employe,{
      foreignKey:{
        allowNull:false
      }
    })
  }

  return commentaire;
}