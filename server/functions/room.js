var Room = require('../schema/room');
// get single room
var getRoom = function (req, resp, next) {
  resp.send("GET");
}

// create single room
var saveRoom = function (req, res, next) {
  console.log('creating room now');
  var room = new Room(req.body);

  room.save(function (err) {
    if (err) {

      return next(err);
    } else {

      return res.json({
        message: 'Room created!'
      });
    }
  });
}

var getAll = function (req, res, next) {
  Room.find(function (err, rooms) {
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
  getAll:getAll

}
