const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let venueSchema = new Schema({
    name: {
        type: String
    }
}, {
    collection: 'venues'
})

let websiteSchema = new Schema({
    domainname: {
        type: String
    },
    domain: {
        type: String
    }
}, {
    collection: 'websites'
})

let bookingSchema = new Schema({
    id: {
        type: String
    },
    website: {
        type: String
    },
    venue:{
        type: String
    },
    price:{
        type: String
    },
    visibility:
    {
        type: String
    }
}, {
    collection: 'bookingsdata'
})
module.exports = {
    venues: mongoose.model('venues', venueSchema),
    websites: mongoose.model('websites', websiteSchema),
    bookingsdata: mongoose.model('bookingsdata', bookingSchema)
}