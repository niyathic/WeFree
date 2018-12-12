var mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    dateRange: String,
    timeRange: String,
    users: Object,
    timeslots: Object
})

module.exports = mongoose.model('Event', eventSchema);
