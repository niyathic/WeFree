var mongoose = require('mongoose');

const timeslotSchema = new mongoose.Schema({
    timeslot: String,
    usersClicked: Object
})

module.exports = mongoose.model('Timeslot', timeslotSchema);
