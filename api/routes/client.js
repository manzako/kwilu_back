const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/clients", (req, res) => {
  db.client
    .findAll()
    .then((allclients) => {
      return res.send(allclients);
    })
    .catch((err) => res.status(404).json(err));
});

router.post("/clients", (req, res) => {
  db.client
    .create({
      nom_client: req.body.nom_client,
      adresse:req.body.adresse,
      email:req.body.email
    })
    .then((unClient) => res.status(201).json(unClient))
    .catch((err) => res.status(400).json(err));
});

router.get("/clients/:id", (req, res) => {
  db.client
    .findAll({
      where: {
        id: Number(req.params.id)
      }
    })
    .then((unClient) => {
      return res.send(unClient);
    })
    .catch((err) => {
      return res.status(404).json(err);
    });
});

router.delete("clients/:id", (req, res) => {
  db.client
    .destroy({
      where: {
        id: Number(req.params.id)
      },
    })
    .then((delClient) => {
      return res.status(200).json(delClient);
    });
});

module.exports = router;
