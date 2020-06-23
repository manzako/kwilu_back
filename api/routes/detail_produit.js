const express = require("express");
const router = express.Router();
const db = require("../../models");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/bons");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/vehicules/:id/detail_produits", (req, res) => {
  db.detail_produit
    .findAll({
      include: [db.vehicule, db.client, db.produit],
    })
    .then((allDetails) => {
      return res.send(allDetails);
    })
    .catch((err) => res.status(404).json(err));
});


router.get("/detail_produits", (req, res) => {
  db.detail_produit
    .findAll({
      include: [db.vehicule, db.client, db.produit],
    })
    .then((allDetails) => {
      return res.send(allDetails);
    })
    .catch((err) => res.status(404).json(err));
});


router.post(
  "/vehicules/:id/detail_produits",
  upload.single("photo_bon"),
  (req, res, next) => {
    db.detail_produit
      .create({
        ref_bon: req.body.ref_bon,
        quantite: Number(req.body.quantite),
        photo_bon: `https://localhost:4600/${req.file.path}`,
        vehiculeId: Number(req.params.id),
        produitId: Number(req.query.produitId),
        clientId: Number(req.query.clientId),
      })
      .then((detail) => {
        return res.status(201).json(detail);
      })
      .catch((err) => res.status(500).json(err));
  }
);

router.get("/vehicules/:id/detail_produits/:idbon", (req, res) => {
  db.detail_produit
    .findAll({
      where: {
        id: req.params.idbon,
      },
      include: [db.vehicule, db.client, db.produit],
    })
    .then((unProduit) => {
      res.send(unProduit);
    })
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
