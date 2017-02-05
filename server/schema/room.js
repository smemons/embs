const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    roomName: String,
    areaName:String,
    long: String,
    lat:String,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Room', RoomSchema);
