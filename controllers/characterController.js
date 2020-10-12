let router = require("express").Router();
let Character = require('../db').import('../models/characterModel');
let validateSession = require("../middleware/validate-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Character Create
router.post("/", validateSession, (req, res) => {
    const characterEntry = {
      name: req.body.character.name,
      gender: req.body.character.gender,
      age: req.body.character.age,
      race: req.body.character.race,
      occupation: req.body.character.occupation,
      skills: req.body.character.skills,
      // userId: req.user.id,
      miscellaneous: req.body.character.miscellaneous
    };

    Character.create(characterEntry)
        .then((character) => res.status(200).json(character))
        .catch((err) => res.status(500).json({ error: err }));
});

//Character Delete
router.delete('/:id', validateSession, (req, res) => {
  const query = { where: { id: req.params.id } };
  Character.destroy(query)
  .then((recordsChanged) => {
    if (recordsChanged !== 0) {
      res.status(200).json({
        message: "character deleted.",
      });
    } else {
      res.status(200).json({
        message: 'character not found.',
      });
    }
  })
  .catch((err) => res.status(500).json({ error: err }));
});

// Character Update
router.put('/:id', validateSession, (req, res) => {
  const query = { where: { id: req.params}};
  const characterEntry = {
    name: req.body.character.name,
    gender: req.body.character.gender,
    age: req.body.character.age,
    race: req.body.character.race,
    occupation: req.body.character.occupation,
    skills: req.body.character.skills,
    // userId: req.user.id,
    miscellaneous: req.body.character.miscellaneous
  };

  Character.update(characterEntry, query)
  .then((recordsChanged) => {
    console.log(recordsChanged)
    if (recordsChanged[0] !== 0 ) {
      res.status(200).json({
        message: "character updated.",
      });
    } else {
      res.status(200).json({
        message: 'character not found',
      });
    }
  })
  .catch((err) => res.status(500).json({ error: err }));
});

//get all Characters
router.get("/", validateSession,  (req, res) => {
  console.log('yo')
  Character.findAll()
  .then((characters) => res.status(200).json(characters))
  .catch((err) => res.status(500).json({ error: err }));
});

//get Character by ID
router.get('/:id', validateSession, (req, res) => {
  const query = { where: { id: req.params.id}};

  Character.findOne(query)
  .then((character) => res.status(200).json(character))
  .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;