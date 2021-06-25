const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: {type: String}
}, {
    collection: 'hotel'
})

const roomSchema = new Schema({
    name: {type: String},
    roomNumber: {type: Number},
    hotel: {type: Schema.Types.ObjectId, ref: 'hotel' }
}, {collection: 'room'})

const websiteSchema = new Schema({
    domainName: { type: String},
    domain: {type: String}
    },
    {
        collection: 'website'
    }
);

const hotelWebsiteSchema = new Schema({
    hotel: { type: Schema.Types.ObjectId, ref: 'hotel', required: true},
    website: { type: Schema.Types.ObjectId, ref: 'website', required: true},
    isVisible: { type: Boolean, required: true},
});
hotelWebsiteSchema.index({hotel: 1, website: 1}, {unique: true});


const bookingSchema = new Schema({
    hotelWebsite: { type: Schema.Types.ObjectId, ref: 'hotelWebsite'},
    room: {type: Schema.Types.ObjectId, ref: 'room'},
    price: {type: String},
    },
    {
        collection: 'bookingdata'
    }
);
bookingSchema.index({hotelWebsite: 1, room: 1}, {unique: true});

module.exports = {
    hotel: mongoose.model('hotel', hotelSchema),
    website: mongoose.model('website', websiteSchema),
    bookingdata: mongoose.model('bookingdata', bookingSchema),
    room: mongoose.model('room', roomSchema),
    hotelWebsite: mongoose.model('hotelWebsite', hotelWebsiteSchema)
}