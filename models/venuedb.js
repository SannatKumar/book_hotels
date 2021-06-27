const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for storing venue names
const venueSchema = new Schema({
    name: {type: String}
}, {collection: 'venue'})

//Schema for Meeting Room to store name & hotel(referenced to ) 
const meetingRoomSchema = new Schema({
    name: {type: String},
    venue: {type: Schema.Types.ObjectId, ref: 'venue' }
}, {collection: 'meetingRoom'});

//Schema for storing websites
const websiteSchema = new Schema({
    websiteName: {type: String}
    },{collection: 'website'});

//Schema for storing venue, website and visibility
const venueWebsiteSchema = new Schema({
    venue: { type: Schema.Types.ObjectId, ref: 'venue', required: true},
    website: { type: Schema.Types.ObjectId, ref: 'website', required: true},
    isVisible: { type: Boolean, required: true},
},{collection: 'venueWebsite'});
venueWebsiteSchema.index({venue: 1, website: 1}, {unique: true});

//Booking Schema for venueWebsite, room and price for the room
const bookingSchema = new Schema({
    venueWebsite: { type: Schema.Types.ObjectId, ref: 'venueWebsite'},
    room: {type: Schema.Types.ObjectId, ref: 'meetingRoom'},
    price: {type: String},
    },{collection: 'bookingData'});
bookingSchema.index({venueWebsite: 1, room: 1}, {unique: true});

//Export all the collection via mongoose.model
module.exports = {
    venue: mongoose.model('venue', venueSchema),
    room: mongoose.model('meetingRoom', meetingRoomSchema),
    website: mongoose.model('website', websiteSchema),
    venueWebsite: mongoose.model('venueWebsite', venueWebsiteSchema),
    bookingData: mongoose.model('bookingData', bookingSchema)
}