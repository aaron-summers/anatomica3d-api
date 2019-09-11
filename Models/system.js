const mongoose = require('mongoose');

const SystemSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    male_url: String,
    male_imgurl: String,
    female_url: String,
    female_imgurl: String
})

module.exports = mongoose.model('System', SystemSchema)