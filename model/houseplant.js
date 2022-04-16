const mongoose = require('mongoose');

const houseplantSchema = mongoose.Schema({

    name :{
        type : String,
        required : true,
    },
    info :{
        type : String,
        required : true,
    },
    price :{
        type : Number,
        require : true,
    },
    img : {
        type : String,
        required : true,
    },
    speciality:[{
        type : String,
        required : true,
    }],
    discription :[{
        type : String,
        required : true,
    }]


} , {
    timestamps :true
})

const HousePlant = mongoose.model('HousePlant' ,houseplantSchema);

module.exports = HousePlant;