var Room = require('../schema/room');
// get single room
var getRoom = function(req, resp, next) {
    resp.send("GET method");
}

// create single room
var saveRoom = function(req, res, next) {
    console.log('creating room now');
    var room = new Room(req.body);

    room.save(function(err) {
        if (err) {

            return next(err);
        } else {

            return res.json({
                message: 'Room created!'
            });
        }
    });
}

var getAll = function(req, res, next) {
    Room.find(function(err, rooms) {
        if (err) {

            next(err);
        } else {

            res.json(rooms);
        }
    });
}
var getRoomByName = function(req, res, next) {
    console.log('getting a room' + JSON.stringify(req.body));
    var roomn = req.params.roomName;
    console.log('Looking by roomName: ' + roomn);
    Room.findOne({ "roomName": roomn }, function(err, rooms) {
        if (err) {

            next(err);
        } else {

            res.json(rooms);
        }
    });
}

module.exports = {
    getRoom: getRoom,
    saveRoom: saveRoom,
    getAll: getAll,
    getRoomByName: getRoomByName

}