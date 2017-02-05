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

module.exports = {
    getIncident: getIncident,
    saveIncident: saveIncident,
    getAll: getAll

}