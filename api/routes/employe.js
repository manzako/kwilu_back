const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


router.get("/", (req, res) => {
  db.employe
    .findAll({
      include: [db.commentaire],
    })
    .then((allEmploye) => {
      return res.send(allEmploye);
    })
    .catch((err) => res.status(404).json(err));
});

router.post("/", (req, res) => {
  db.employe
    .create({
      nom: req.body.nom,
      email: req.body.email,
      pwd: req.body.pwd,
      role: req.body.role,
    })
    .then((unEmploye) => res.status(201).json(unEmploye))
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  db.employe
    .findAll({
      where: {
        id: req.params.id,
      },
      include: [db.commentaire],
    })
    .then((employes) => {
      return res.send(employes);
    })
    .catch((err) => {
      return res.status(404).json(err);
    });
});

router.delete("/:id", (req, res) => {
  db.employe
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((delEmploye) => {
      return res.status(200).json(delEmploye);
    });
});

router.post('/login',(req,res,next)=>{
  db.employe.findAll({where:{email:req.body.email}}).then(user=>{
    if(user.length<1){
      return res.status(404).json({
        message:'email non trouvé, cet employé n existe pas'
      });
    }
    bcrypt.compare(req.body.pwd,user[0].pwd,(err,result)=>{
      if(err){
        return res.status(401).json({
          message:'authentification échouée'
        })
      }
      if(result){
       const token= jwt.sign({
          email:user[0].email,
          employeId:user[0].id,
          nom:user[0].nom,
          role:user[0].role
        },process.env.JWT_KEY,{
          expiresIn:"1h"
        },);

        return res.status(200).json({
          message:'authentification reussie',
          token:token
        })
      }
    })
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    })
    
  })
})


module.exports = router;
