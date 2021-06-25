let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// Venue Model

let {hotel, website, bookingdata, room, hotelWebsite} = require('../models/venuedb');

// Create hotel data
router.route('/create-hotel').post((req, res, next) => {
  console.log("here")
    hotel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

  // Create Website data
  router.route('/create-website').post((req, res, next) => {
    website.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

   // Create booking data
   router.route('/create-booking').post((req, res, next) => {
    bookingdata.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

  // Create room data
  router.route('/create-room').post((req, res, next) => {
    room.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });


  //Read the website data

  router.route('/show-website').get((req, res) => {
    website.find((error, data)=> {
      if(error){
        return next(error)
      }
      else{
        return res.json(data);
      }
    })
  })

  //Read the room data

  router.route('/show-room').get((req, res) => {
    room.find((error, data)=> {
      if(error){
        return next(error)
      }
      else{
        return res.json(data);
      }
    }).populate('hotel')
  })

  //Read the booking data

  router.route('/show-booking').get((req, res) => {
    var populateQuery = [
      {path:'website', select:'domainName domain'},
      {path:'hotel', select:'name'},
      {path: 'room', select: 'name roomNumber hotel'}
    ];
    bookingdata.find((error, data)=> {
      if(error){
        return next(error)
      }
      else{
        return res.json(data);
      }
    }).populate(populateQuery) 
  })


//Read the hotel data

router.route('/show-hotel').get((req, res) =>{
    hotel.find((error, data) => {
        if(error) {
            return next(error)
        }else {
            res.json(data)
        }
    })
})

//create hotelwebsite data
router.route('/create-hotelwebsite').post((req, res, next) => {
  hotelWebsite.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

router.route('/websited/:id').get((req, res) => {
  console.log(req.params.id)
  const websiteId = req.params.id;
  console.log(typeof websiteId)
  hotelWebsite.findOne({"website": {_id: websiteId}, isVisible: true},(error, data) =>{
    if(error){
      return res.json({error: "Object Does not exist"})
    }
    if (!data){return res.send("No rooms found")}
    bookingdata.find({"hotelWebsite": {_id: data._id}}, (error, exactData) => {
      if(error){
        return res.json({error: "Fail to Load"})
      }
      console.log(exactData);
      return res.json(exactData);
    })

  })
});

// Async await
router.route('/website/:id').get(async (req, res) => {
  const websiteId = req.params.id;
  console.log(typeof websiteId)
  const hotelwebsiteInstance = await hotelWebsite.findOne({"website": {_id: websiteId}, isVisible: true});
  if (!hotelwebsiteInstance){
    return res.send("No rooms found")
  }

  try {
    const bookingdataInstance = await bookingdata.find({"hotelWebsite": {_id: hotelwebsiteInstance._id}});
    return res.json(bookingdataInstance)
  }
  catch (error) {
    console.log('Error here ', error);
    return res.send({})
  }
});
//Read the website data

// router.route('/website').get((req, res) =>{
//     websites.find((error, data) => {
//         if(error) {
//             return next(error)
//         }else {
//             res.json(data)
//         }
//     })
// })


module.exports = router;

    