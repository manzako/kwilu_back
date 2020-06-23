const express = require("express");
const router = express.Router();
const db = require("../../models");
const multer=require("multer");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString()+file.originalname);
  }
});

const upload=multer({storage:storage});


router.get("/enregistrements", (req, res) => {
  
  db.vehicule
    .findAll({
      include: [db.employe, db.etat],
    })
    .then((allVehicule) => {
      return res.send(allVehicule);
    }).catch(err=>res.status(404).json(err));

});

router.post("/enregistrements", upload.single('photo_vehicule'),(req, res,next) => {
  let Vehicule = null;
  db.vehicule
    .create({
      numero_plaque: req.body.numero_plaque,
      transporteur: req.body.transporteur,
      photo_vehicule:`http://localhost:4600/${req.file.path}`,
      marque: req.body.marque,
      heure_parking: new Date(),
      employeId: Number(req.query.employeId),
      etatId: Number(req.query.etatId)
    })
    .then((vehicule1) => {
      Vehicule = vehicule1;
      const Detail_produit = db.detail_produit.create({
        ref_bon: req.body.ref_bon,
        quantite: Number(req.body.quantite),
        vehiculeId: vehicule1.id,
        clientId: Number(req.query.clientId),
        produitId: Number(req.query.produitId)
      }).then(detail=>{
        db.vehicule.findAll({
          where: {
            id: detail.dataValues.vehiculeId,
          },
          include: [db.etat, db.employe],
        }).then(cars=>res.status(201).json(cars)).catch(err=>res.status(400).json(err));
        
        
      });
    });
});

router.get('enregistrements/:id',(req,res)=>{
  db.vehicule.findAll({
    where:{
      id:req.params.id
    },
    include:[db.employe, db.etat]
  }).then((unVehicle)=>{
    res.send(unVehicle);
  }).catch(err=>res.status(404).json(err));

});

router.put("enregistrements/:id", (req, res) => {
  let values = {
    heure_chargement: new Date(),
    heure_charge: new Date(),
    etatId: req.body.etatId,
  };
  let condition = { where: { id: req.params.id } };
  let options = { multi: true };

  db.vehicule.update(values, condition, options).then((vehiculeUp) => {
    res.send(vehiculeUp);
  }).catch(err=>res.status(400).json(err));
});

module.exports = router;
