const express = require('express');
const router = express.Router();
var db = require('../config/db');

const uf = require('../functions/incident');


var incident = express.Router();
incident.get('/', uf.getIncident);
incident.post('/', uf.saveIncident);
incident.get('/byName/:incName', uf.getIncByName);
incident.get('/all', uf.getAll);




module.exports = incident;