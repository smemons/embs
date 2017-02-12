var Incident = require('../schema/incident');
// get single room
var getIncident = function(req, resp, next) {
    resp.send("GET");
}

// create single room
var saveIncident = function(req, res, next) {
    console.log('creating incident now');
    var incident = new Incident(req.body);

    incident.save(function(err) {
        if (err) {

            return next(err);
        } else {

            return res.json({
                message: 'Incident created!'
            });
        }
    });
}

var getAll = function(req, res, next) {
    Incident.find(function(err, incident) {
        if (err) {

            next(err);
        } else {

            res.json(incident);
        }
    });
}

var getIncByName = function(req, res, next) {
    // console.log('getting a room' + JSON.stringify(req.body));
    var inc = req.params.incName;
    //console.log('Looking by roomName: ' + roomn);
    Incident.findOne({ "title": inc }, function(err, rooms) {
        if (err) {

            next(err);
        } else {

            res.json(rooms);
        }
    });
}

module.exports = {
    getIncident: getIncident,
    saveIncident: saveIncident,
    getAll: getAll,
    getIncByName: getIncByName

}
