const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const employe = require("./api/routes/employe");
const commentaire = require("./api/routes/commentaire");
const vehicule=require("./api/routes/vehicule");
const etat=require("./api/routes/etat");
const client=require("./api/routes/client");
const produit=require("./api/routes/produit");
const detail_produit = require("./api/routes/detail_produit");
const enregistrement=require("./api/routes/enregistrement");
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/employes", employe);
app.use("",commentaire);
app.use("",vehicule);
app.use("",etat);
app.use("",client);
app.use("",produit);
app.use("",detail_produit);
app.use("",enregistrement);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
