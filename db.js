require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres'});

sequelize.authenticate().then(
    function() {
        console.log('Connected to CC database!');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize

//missing database setups
// import models to this file
// utilizing reserved methods, tie them together
// create owner id
// keyword of has1, has many, etc
// limited role access
