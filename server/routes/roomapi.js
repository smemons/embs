const express = require('express');
const router = express.Router();
var db = require('../config/db');

const uf=require('../functions/room');


var rooms = express.Router();
rooms.get('/', uf.getRoom);
rooms.post('/', uf.saveRoom);
// users.post('/authenticate',uf.authenticate);
rooms.get('/all',uf.getAll);
// users.get('/:id', function(req, res) { });
// users.patch('/:id', function(req, res) { });
// users.delete('/:id', function(req, res) { });



module.exports = rooms;
