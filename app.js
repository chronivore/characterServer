require('dotenv').config()
let express = require('express');
let app = express();
let sequelize = require('./db');

app.use('/poop', function(req, res){
    res.send('poopity scoop!')
})

let user = require('./controllers/userController');
let character = require('./controllers/characterController');
let location = require('./controllers/locationController');
//potentially admin


sequelize.sync();

// app.use(require('./middleware/headers'));
app.use(express.json());

app.use('/user', user);
app.use('/character', character);
app.use('/location', location);

app.listen(process.env.PORT, function() {
    console.log(`App is listening on port ${process.env.PORT}`);
})


