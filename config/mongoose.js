// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/Authen_JWT');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


// db.once('open', function(){
//     console.log('Connected to Database :: MongoDB');
// });

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Sagnik:Sagnik1234@cluster0.s5v7y.mongodb.net/Plants?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;


