// Modules externes
const express = require('express')
const mysql = require('promise-mysql')
const morgan = require('morgan')('dev')
const bodyParser = require('body-parser')

// Modules internes
const config = require('./config')

// Variables globales
let app = express()


/* ROUTES  */

app.get(config.rootAPI, (req, res) => {
    res.send('It Works')
})

// Lancement de l'API

app.listen(config.port, () => console.log('API started on port '+config.port))