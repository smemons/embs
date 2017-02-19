const express = require('express');
const router = express.Router();
var db = require('../config/db');

const uf = require('../functions/post');


var posts = express.Router();
posts.get('/', uf.getPost);
posts.post('/', uf.savePost);
// users.post('/authenticate',uf.authenticate);
posts.get('/all', uf.getAll);
posts.get('/latest/:incName', uf.getLatest)
    //posts.get('/byName/:roomName', uf.getRoomByName);
    // users.patch('/:id', function(req, res) { });
    // users.delete('/:id', function(req, res) { });



module.exports = posts;
