let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// Venue Model

let venueSchema = require('../models/venuedb');

// CREATE venues data
router.route('/create-venue').post((req, res, next) => {
    venueSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

  //Read the data

router.route('/').get((req, res) =>{
    venueSchema.find((error, data) => {
        if(error) {
            return next(error)
        }else {
            res.json(data)
        }
    })
})


module.exports = router;