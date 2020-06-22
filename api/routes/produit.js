const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/produits", (req, res) => {
  db.produit
    .findAll()
    .then((allProduit) => {
      return res.send(allProduit);
    })
    .catch((err) => res.status(404).json(err));
});

router.post("/produits", (req, res) => {
  db.produit
    .create({
      type_produit: req.body.type_produit
    })
    .then((unProduit) => res.status(201).json(unProduit))
    .catch((err) => res.status(400).json(err));
});

router.get("/produits/:id", (req, res) => {
  db.produit
    .findAll({
      where: {
        id: Number(req.params.id)
      }
    })
    .then((unProduit) => {
      return res.send(unProduit);
    })
    .catch((err) => {
      return res.status(404).json(err);
    });
});

router.delete("produits/:id", (req, res) => {
  db.produit
    .destroy({
      where: {
        id: Number(req.params.id)
      },
    })
    .then((delProduit) => {
      return res.status(200).json(delProduit);
    });
});

module.exports = router;
