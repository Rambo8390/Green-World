const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({

    email :{
        type :String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true
    },
    cart :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Cart'
    }]

},
{
    timestamps :true
});

//Instance methods


const User = mongoose.model('User' ,userSchema);

module.exports = User;