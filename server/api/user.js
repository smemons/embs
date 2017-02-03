var express = require('express');
var db = require('../config/db');

//const dbUrl = 'mongodb://dbuser:dbuser@54.224.174.203:41108/mydb';

//const db = require('mongoose').connect(dbUrl);


var User = require('../schema/user');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('GET');
});
/* POST users listing. */
router.post('/', function (req, res, next) {
  console.log('Registering user now');
  var user = new User(req.body);

  user.save(function (err) {
    if (err) {

      return next(err);
    } else {

      return res.json({
        message: 'UserCreated!'
      });
    }
  });
});
//list all users
/* GET All Todos */
router.get('/all', function (req, res, next) {
  user.find(function (err, users) {
    if (err) {
      next(err);
    } else {
      res.json(users);
    }
  });
});
/* DELETE a Todo */
router.delete('/:id', function (req, res) {
  user.remove({
    username: req.params.id
  }, '', function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });

});

module.exports = router;
