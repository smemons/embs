let express = require("express");
var path = require('path');
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
const bodyParser = require('body-parser');
let clientListNames = [];

const userapi = require('./server/routes/userapi');

const roomapi = require('./server/routes/roomapi');

const incidentapi = require('./server/routes/incidentapi');

// // Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(express.static(__dirname, '/'));
app.use(express.static(path.join(__dirname, 'dist')));
//app.use(express.static(__dirname + '/node_modules'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// // Set our api routes
app.use('/api/user', userapi);
app.use('/api/room', roomapi);
app.use('/api/incident', incidentapi);

// /**
//  * Get port from environment and store in Express.
//  */
const port = process.env.PORT || '3000';
app.set('port', port);

io.on('connection', function(socket) {
    console.log('instantiating socket' + socket.handshake.query.userName);
    if (socket.handshake.query.userName != null) {
        io.emit('em-message', 'User connected: ' + socket.handshake.query.userName);
        clientListNames.push(socket.handshake.query.userName);
    }


    socket.on('disconnect', function() {
        console.log('i am disconnectd');
    });


    socket.on('em-message', function(msg) {
        console.log('got message from client' + msg);
        io.emit('em-message', msg);
    });
});

http.listen(port, function() {
    console.log('listening on *:3000');
});


// // Get dependencies
// const express = require('express');
// const path = require('path');
// const http = require('http');
// const bodyParser = require('body-parser');

// // Get our API routes
// const userapi = require('./server/routes/userapi');

// const roomapi = require('./server/routes/roomapi');

// const incidentapi = require('./server/routes/incidentapi');




// const app = express();

// // Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));

// // Set our api routes
// app.use('/api/user', userapi);
// app.use('/api/room', roomapi);
// app.use('/api/incident', incidentapi);





// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// /**
//  * Get port from environment and store in Express.
//  */
// const port = process.env.PORT || '3000';
// app.set('port', port);

// /**
//  * Create HTTP server.
//  */
// const server = http.createServer(app);

// //set socket.io for chat
// var io = require('socket.io').listen(server);
// io.on('connnection', (socket) => {
//     console.log('user connected');
//     socket.on('message', (msg) => {
//         console.log('Message Received: ', msg);
//         socket.broadcast.emit('message', msg);
//     });
//     socket.on('disconnect', () => {
//         console.log('user has disconnected');
//     });


// });

// /**
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port, () => console.log(`API running on localhost:${port}`));