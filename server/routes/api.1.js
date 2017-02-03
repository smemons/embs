const express = require('express');
const router = express.Router();
var db = require('../config/db');
//Get User
const user = require('../api/user');

//authenticate user
const auth = require('../api/auth');

var User = require('../schema/user');
const app = express();

//set the user path
app.use('/users', user);
//set path to auth
app.use('/authenticate', auth);

/* GET users listing. */
// router.get('/user', function(req, res, next) {
//     res.send('GET');
// });
// /* POST users listing. */
// router.post('/user', function(req, res, next) {
//     console.log('Registering user now');
//     var user = new User(req.body);

//     user.save(function(err) {
//         if (err) {

//             return next(err);
//         } else {

//             return res.json({ message: 'UserCreated!' });
//         }
//     });
// });

    /* authenticate user . */
    // router.route('/authenticate')
    //     .post(function(req, res, next) {
    //         // get parameters from post request
    //         let params = JSON.parse(req.body);
    //         console.log(params);
    //         // find if any user matches login credentials
    //         let filteredUsers = User.filter(user => {
    //             return user.username === params.username && user.password === params.password;
    //         });
    //         res.send('POST');

    //     });


module.exports = router;
