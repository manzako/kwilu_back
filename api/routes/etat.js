const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/etats", (req, res) => {
  db.etat
    .findAll()
    .then((allEtat) => {
      return res.send(allEtat);
    })
    .catch((err) => res.status(404).json(err));
});

router.post("/etats", (req, res) => {
  db.etat
    .create({
      libelle: req.body.libelle,
    })
    .then((unEtat) => res.status(201).json(unEtat))
    .catch((err) => res.status(400).json(err));
});

router.get("/etats/:id", (req, res) => {
  db.etat
    .findAll({
      where: {
        id: Number(req.params.id)
      }
    })
    .then((unEtat) => {
      return res.send(unEtat);
    })
    .catch((err) => {
      return res.status(404).json(err);
    });
});

router.delete("etats/:id", (req, res) => {
  db.employe
    .destroy({
      where: {
        id: Number(req.params.id)
      },
    })
    .then((delEtat) => {
      return res.status(200).json(delEtat);
    });
});

module.exports = router;
