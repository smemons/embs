const express = require('express');
const router = express.Router();
var db = require('../config/db');

const uf = require('../functions/incident');


var incident = express.Router();
incident.get('/', uf.getIncident);
incident.post('/', uf.saveIncident);
// users.post('/authenticate',uf.authenticate);
incident.get('/all', uf.getAll);
// users.get('/:id', function(req, res) { });
// users.patch('/:id', function(req, res) { });
// users.delete('/:id', function(req, res) { });



module.exports = incident;