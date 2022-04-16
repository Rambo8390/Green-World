const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({

    name :{
        type : String,
        required : true,
    },
    img : {
        type : String,
        required : true,
    },
    price :{
        type : Number,
        require : true,
    },
    qty :{
        type : Number,
        require : true,
    }

});

const Cart = mongoose.model('Cart' ,cartSchema);

module.exports = Cart;