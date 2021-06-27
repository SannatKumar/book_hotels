let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// Venue Model

let {venue, room, website, venueWebsite, bookingData} = require('../models/venuedb');

// Create venue data
router.route('/create-venue').post(async (req, res, next) => {
  console.log("create-venue_route");
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
  console.log("show-venue_route");
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
  console.log("create-meeting_room");
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
  console.log("show-meeting_room");
  try{
    const roomData = await room.find();
    return res.json(roomData);
  }
  catch(error){
    return next(error);
  }
});






//   //Read the hotel data

// router.route('/show-hotel').get((req, res) =>{
//   hotel.find((error, data) => {
//       if(error) {
//           return next(error)
//       }else {
//           res.json(data)
//       }
//   })
// });


//   // Create Website data
//   router.route('/create-website').post((req, res, next) => {
//     website.create(req.body, (error, data) => {
//       if (error) {
//         return next(error)
//       } else {
//         console.log(data)
//         res.json(data)
//       }
//     })
//   });

//   //Read the website data

//   router.route('/show-website').get((req, res) => {
//     website.find((error, data)=> {
//       if(error){
//         return next(error)
//       }
//       else{
//         return res.json(data);
//       }
//     })
//   })

//    // Create booking data
//    router.route('/create-booking').post((req, res, next) => {
//     bookingdata.create(req.body, (error, data) => {
//       if (error) {
//         return next(error)
//       } else {
//         console.log(data)
//         res.json(data)
//       }
//     })
//   });

//   //Read the booking data

//   router.route('/show-booking').get((req, res) => {
//     var populateQuery = [
//       {path:'website', select:'domainName domain'},
//       {path:'hotel', select:'name'},
//       {path: 'room', select: 'name roomNumber hotel'}
//     ];
//     bookingdata.find((error, data)=> {
//       if(error){
//         return next(error)
//       }
//       else{
//         return res.json(data);
//       }
//     }).populate(populateQuery) 
//   })



//   // Create room data
//   router.route('/create-room').post((req, res, next) => {
//     room.create(req.body, (error, data) => {
//       if (error) {
//         return next(error)
//       } else {
//         console.log(data)
//         res.json(data)
//       }
//     })
//   });

//     //Read the room data

//     router.route('/show-room').get((req, res) => {
//       room.find((error, data)=> {
//         if(error){
//           return next(error)
//         }
//         else{
//           return res.json(data);
//         }
//       }).populate('hotel')
//     })


  



  

// //REad the hotel website data

// router.route('/show-hotelwebsite').get((req, res) =>{
//   hotelWebsite.find((error, data) => {
//       if(error) {
//           return next(error)
//       }else {
//           res.json(data)
//       }
//   })
// })


// //create hotelwebsite data
// router.route('/create-hotelwebsite').post((req, res, next) => {
//   hotelWebsite.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       console.log(data)
//       res.json(data)
//     }
//   })
// });

// // router.route('/websited/:id').get((req, res) => {
// //   console.log(req.params.id)
// //   const websiteId = req.params.id;
// //   console.log(typeof websiteId)
// //   hotelWebsite.findOne({"website": {_id: websiteId}, isVisible: true},(error, data) =>{
// //     if(error){
// //       return res.json({error: "Object Does not exist"})
// //     }
// //     if (!data){return res.send("No rooms found")}
// //     bookingdata.find({"hotelWebsite": {_id: data._id}}, (error, exactData) => {
// //       if(error){
// //         return res.json({error: "Fail to Load"})
// //       }
// //       console.log(exactData);
// //       return res.json(exactData);
// //     })

// //   })
// // });

// // // Async await True
// // router.route('/website/:id').get(async (req, res) => {
// //   const websiteId = req.params.id;
// //   console.log(typeof websiteId)
// //   try{
// //     const hotelwebsiteInstance = await hotelWebsite.findOne({"website": {_id: websiteId}, isVisible: true});
// //     return res.json(hotelwebsiteInstance);
// //   }
// //   catch(error)
// //   {
// //     res.send({error: "Fail to Load"})
// //   }
// //   if (!hotelwebsiteInstance){
// //     return res.send("No data found")
// //   }
// //   try {
// //     const bookingdataInstance = await bookingdata.find({"hotelWebsites": {_id: hotelwebsiteInstance._id}});
// //     return res.json(bookingdataInstance)
// //   }
// //   catch (error) {
// //     console.log('Error here ', error);
// //     return res.send({})
// //   }
// // });

// // Async await False
// router.route('/website/:id').get(async (req, res) => {
//   const websiteId = req.params.id;
//   try{
//     const hotelwebsiteInstance = await hotelWebsite.findOne({"website": {_id: websiteId}, isVisible: true});
//     if (!hotelwebsiteInstance){
//       return res.send("No data found")
//     }
//     else{
//       try{
//         const bookingdataInstance = await bookingdata.find({"hotelWebsites": {_id: hotelwebsiteInstance._id}});
//         return bookingdataInstance;
//       }
//       catch(error){
//         return res.send(error);
//       }
//     }
//   }
//   catch(error)
//   {
//     res.send({error: "Fail to Load"})
//   }
// });


// //Read the booking data

// //REad the hotel website data

// router.route('/show-bookingdata').get(async(req, res) =>{
//   var spopulateQuery = [
//     {path:'website', select:'domainName domain'},
//     {path:'hotel', select:'name'},
//     {path: 'bookingdata', select: 'price'}
//   ];
//   try{
//     const showVisibileWebsite = await hotelWebsite.find({isVisible: true}).populate(spopulateQuery);
//     const showVisibileWebsiteId = res.json(showVisibileWebsite);
//     const visibleDataPrice = await bookingdata.find({"bookingdata": {_id: showVisibileWebsiteId.website.id}});
//     return res.json(visibleDataPrice);
//   }
//   catch(error)
//   {
//     res.send({error: "Fail to Load"})
//   }

// });
// //Read the website data

// // router.route('/website').get((req, res) =>{
// //     websites.find((error, data) => {
// //         if(error) {
// //             return next(error)
// //         }else {
// //             res.json(data)
// //         }
// //     })
// // })


module.exports = router;

    