const HousePlant = require('../model/houseplant')

// var category =[
//     {
//         name : "Sagnik",
//         info : "Studying in RAIT and Scholar in college with 9.6 pointer" ,
//         price : 100000,
//         img : "/uploads/p1.jpg",
//         discrip :["age = 20" , "batch = B2" ,"division = B" , "Rollno = 19IT1006"],
        
//     },
//     {
//      name : "Karan",
//      info : "Studying in VESIT and Scholar in college with 9.6 pointer" ,
//      price : 80000,
//      img : "/uploads/p3.jpg",
//      discrip :["age = 22" , "batch = D4" ,"division = D" , "Rollno = 3647388"],
     
//  }

//  ]
module.exports.houseplant = async function(req, res)
{
    var houseplants = await HousePlant.find({});
    res.render('houseplant',{
        category : houseplants,
    });
    
}

module.exports.save = async function(req , res){

    try {
    var speciality = req.body.speciality.split(",");
    var discription = req.body.discription.split(",");
    req.body.speciality = speciality;
    req.body.discription = discription;
    //console.log(req.body);

    const plant = new HousePlant(req.body);
    const createplant  = await plant.save();
    console.log(createplant);
    res.redirect('back');
} catch (error) {
    res.status(400).send(error);
}

}