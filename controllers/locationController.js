require("dotenv").config();
const router = require("express").Router();
const Loc = require("../db").import("../models/locationModel");
const jwt = require("jsonwebtoken");
let Location = require('../db').import('../models/locationModel')
const bcrypt = require("bcryptjs");
let validateSession = require("../middleware/validate-session");

//location create

router.post("/", validateSession, (req, res) => {
  const locationEntry = {
    name: req.body.location.name,
    climate: req.body.location.climate,
    technology: req.body.location.technology,
    miscellaneous: req.body.location.miscellaneous,
  };

  Location.create(locationEntry)
    .then((location) => res.status(200).json(location))
    .catch((err) => res.status(500).json({ error: err }));
});

// location update
router.put('/:id'), validateSession, (req, res) => {
    const query = { where: { id: req.params}};
    const locationEntry = {
        name: req.body.location.name,
        climate: req.body.location.climate,
        technology: req.body.location.technology,
        miscellaneous: req.body.location.miscellaneous
    };

    Location.update(locationEntry, query)
    .then((recordsChanged) => {
        console.log(recordsChanged)
        if (recordsChanged[0] !== 0 ) {
          res.status(200).json({
            message: "location updated.",
          });
        } else {
          res.status(200).json({
            message: 'location not found',
          });
        }
      })
      .catch((err) => res.status(500).json({ error: err }));
    };

    //get all Locations
router.get("/", validateSession, (req, res) => {
    console.log('yo')
    Location.findAll()
    .then((locations) => res.status(200).json(locations))
    .catch((err) => res.status(500).json({ error: err }));
  });

  //get Location by ID
router.get('/:id', validateSession, (req, res) => {
    const query = { where: { id: req.params.id}};
  
    Location.findOne(query)
    .then((location) => res.status(200).json(location))
    .catch((err) => res.status(500).json({ error: err }));
  });
  
  module.exports = router;
  
