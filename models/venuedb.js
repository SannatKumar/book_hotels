const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let venueSchema = new Schema({
    name: {
        type: String
    },
    meetingroom: {
        type: String
    },
    price: {
        type: String
    }
}, {
    collection: 'venues'
})

module.exports = mongoose.model('venues', venueSchema)