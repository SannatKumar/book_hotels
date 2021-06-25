let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// Venue Model

let {venues, websites, bookingsdata} = require('../models/venuedb');

// CREATE venues data
router.route('/create-venue').post((req, res, next) => {
    venues.create(req.body, (error, data) => {
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
    websites.create(req.body, (error, data) => {
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
    bookingsdata.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

  //Read the booking data

  router.route('/show-booking').get((req, res) => {
    bookingsdata.find((error, data)=> {
      if(error){
        return next(error)
      }
      else{
        return res.json(data);
      }
    }) 
  })


//Read the venue data

router.route('/').get((req, res) =>{
    venues.find((error, data) => {
        if(error) {
            return next(error)
        }else {
            res.json(data)
        }
    })
})

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

    