const express = require("express");
const router = express.Router();
const db = require("../../models");

let recherche = (requete) => {
  return new Promise(async (resolve, reject) => {
    const unEmploye = await db.employe.findAll({
      where: {
        id: Number(requete),
      },
    });

    if (unEmploye) {
      resolve(unEmploye);
    }
  });
};

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

router.post("/employes/:id/commentaires",(req, res) => {
  recherche(Number(req.params.id)).then((employe) => {
    const employeId = Number(employe[0]["dataValues"].id);
    db.commentaire
      .create({
        contenu: req.body.contenu,
        employeId: employeId,
      })
      .then((comment) => {
        return res.status(201).json(comment);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  });
});

router.get("/employes/:id/commentaires", (req, res) => {
  db.commentaire
    .findAll({
      where: {
        employeId: req.params.id,
      },
    })
    .then((comments) => {
      return res.send(comments);
    })
    .catch((err) => {
      return res.status(404).json(err);
    });
});

router.delete("/employes/:id/commentaires/:commentId", (req, res) => {
  db.commentaire
    .destroy({
      where: {
        id: req.params.commentId
      },
    })
    .then((delComment) => {
      return res.status(200).json(delComment);
    });
});

module.exports = router;
