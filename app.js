// Modules externes
const express = require("express");
const mysql = require("promise-mysql");
const morgan = require("morgan")("dev");
const bodyParser = require("body-parser");

// Modules internes
const config = require("./config");

// Connexion à la base de données
mysql
  .CreateConnection({
    host: config.db.hostname,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
  })
  .then(async (db) => {
    // Variables globales
    let app = express();

    /* ROUTES  */

    app.get(config.rootAPI, (req, res) => {
      res.send("It Works");
    });

    // Lancement de l'API

    app.listen(config.port, () =>
      console.log("API started on port " + config.port)
    );
  })
  .catch((err) => {
    console.log("Erreur lors de la connexion à la base de données");
    console.log(err.message);
  });