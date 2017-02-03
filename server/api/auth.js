var express = require('express');
var db = require('../config/db');

//const dbUrl = 'mongodb://dbuser:dbuser@54.224.174.203:41108/mydb';

//const db = require('mongoose').connect(dbUrl);


var User = require('../schema/user');
var router = express.Router();
/* authenticate user . */
router.post('/', function(req, res, next) {
    // get parameters from post request
    //let params = JSON.parse(req.body);
    console.log('inside auth.js');
   // console.log(req.body);
   debugger;
    var user = new User(req.body);
   console.log(user);
 
    var username = req.body.username;
    var password = req.body.password;
    console.log('in here ' + username + ' pass ' + password);
    // find if any user matches login credentials
    // let filteredUsers = User.filter(user => {
    //     return user.username === params.username && user.password === params.password;
    // });
    res.send('POST');

});
module.exports = router;