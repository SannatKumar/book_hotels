let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// Venue Model

let {venue, room, website, venueWebsite, bookingData} = require('../models/venuedb');



// Create venue data
router.route('/create-venue').post(async (req, res, next) => {
  try{
    const hotelName = req.body;
    const venueCreation = await venue.create(hotelName);
    return res.json(venueCreation);
  }
  catch(error){
    return next(error);
  }
});

// Read the venue Data

router.route('/show-venue').get(async (req, res, next) => {
  try{
    const venueData = await venue.find();
    return res.json(venueData);
  }
  catch(error){
    return next(error);
  }
});

// Create meeting Room data
router.route('/create-meeting-room').post(async (req, res, next) => {
  try{
    const {name, venue} = req.body;
    const roomCreation = await room.create({name: name, venue: venue});
    return res.json(roomCreation);
  }
  catch(error){
    return next(error);
  }
});

// Read the meetingRoom Data

router.route('/show-meeting-room').get(async (req, res, next) => {
  try{
    const roomData = await room.find();
    return res.json(roomData);
  }
  catch(error){
    return next(error);
  }
});

// Create Website data
router.route('/create-website').post(async (req, res, next) => {
  try{
    const {name} = req.body;
    const websiteCreation = await website.create({websiteName: name});
    return res.json(websiteCreation);
  }
  catch(error){
    return next(error);
  }
});

// Read the website Data

router.route('/show-website-data').get(async (req, res, next) => {
  try{
    const websiteData = await website.find();
    return res.json(websiteData);
  }
  catch(error){
    return next(error);
  }
});

// Create venue Website data
router.route('/create-venue-website').post(async (req, res) => {
  try{
    const {venue, website, isVisible} = req.body;
    const venueWebsiteCreation = await venueWebsite.create({venue: venue, website: website, isVisible: isVisible});
    return res.json(venueWebsiteCreation);
  }
  catch(error){
    res.send({"Error": "something went wrong!"});
  }
});

// Read the venue website Data
router.route('/show-venue-website-data').get(async (req, res) => {
  var populateQuery = [
    {path:'venue', select:'name'},
    {path:'meetingRoom', select:'name venue'},
    {path: 'website', select: 'websiteName'},
    {path: 'venueWebsite', select: 'venue website isVisible'}
  ];
  try{
    const venueWebsiteData = await venueWebsite.find().populate(populateQuery);
    return res.json(venueWebsiteData);
  }
  catch(error){
    res.send({"Error": "something went wrong!"});
  }
});

// Create booking Data
router.route('/create-booking-data').post(async (req, res, next) => {
  try{
    const {venueWebsite, room, price} = req.body;
    const bookingVenueData = await bookingData.create({
      venueWebsite: venueWebsite,
      room: room,
      price: price
    });
    return res.json(bookingVenueData);
  }
  catch(error){
    return next(error);
  }
});

// Read the booking Data

router.route('/show-booking-data').get(async (req, res, next) => {
  var populateQuery = [
    {path:'venue', select:'name'},
    {path:'meetingRoom', select:'name venue'},
    {path: 'website', select: 'websiteName'},
    {path: 'venueWebsite', select: 'venue website isVisible'},
    {path: 'bookingData', select: 'venueWebsite room price'}
  ];
  try{
    const retrBookingData = await bookingData.find().populate(populateQuery);;
    return res.json(retrBookingData);
  }
  catch(error){
    return next(error);
  }
});


// Read the website data based on single website id

router.route('/website/:id').get(async (req, res) => {
  const websiteId = req.params.id;
  try{
    const visibleVenueWebsite = await venueWebsite.findOne({"website": {_id: websiteId}, isVisible: true});
    const bookingdataInstance = await bookingData.find(
          {"venueWebsite": {_id: visibleVenueWebsite._id}});
          console.log("Booking Data Display", bookingdataInstance);
        return res.json(bookingdataInstance)  
  }
  catch(error)
  {
    return res.send({error: "Fail to Load"});
  }
});

module.exports = router;

    