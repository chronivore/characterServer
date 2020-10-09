require('dotenv').config();
const router = require('express').Router();
const User = require('../db').import('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//User Create

router.post('/signup', (req, res) => {

    User.create({
        // role: req.body.user.role,
        password: bcrypt.hashSync(req.body.user.password, 13),
        email: req.body.user.email
    })
    .then(
        createSuccess = (user) => {

            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24})

            res.json({
                user: user,
                message: 'User successfully created',
                sessionToken: token
            });
        }
    )
    .catch(err => res.status(500).json({error: err}))
})

//User Login

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.user.email
        }
    })
    .then( loginSuccess = (user) => {
        if(user) {

            bcrypt.compare(req.body.user.password, user.password, function(err, matches){
                if(matches){
                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

                    res.status(200).json({
                        user:user,
                        message: "User successfully logged in",
                        sessionToken: token
                    })
                } else {
                    res.status(502).send({error: "Login Failed"})
                }
            })

        } else {
            res.status(500).json({ error: 'User does not exist'})
        }
    })
    .catch(err => res.status(500).json({error: err}))
    });

    //Find User by ID

    router.get('/:id', /*validateSession*/ (req, res) => {
        console.log("yo");
        const query = { where: { id: req.params.id}};
    
        User.findOne(query)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(500).json({ error: err}));
    
    });

    module.exports = router;

