const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncidentSchema = new Schema({
    title: String,
    desc: String,
    roomName: String,
    createdBy: String,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Incident', IncidentSchema);