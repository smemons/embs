const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    desc: String,
    incidentName: String,
    createdBy: String,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Post', PostSchema);