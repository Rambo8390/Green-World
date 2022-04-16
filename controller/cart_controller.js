const User = require('../model/user')
const HousePlant = require('../model/houseplant');
const Cart = require('../model/cart')



module.exports.carts = async function(req ,res){
    try{
        let userid = req.params.userid;
        //  console.log(userid);
        // req.flash('success', "welcome to cart");
        let items = await User.findById(userid).populate('cart');
       
        return res.render('cart',{
            items : items
        });

    }catch(err){
        req.flash('error', err);
        return;
    }

    // res.send("<h1> This is cart </h1>");
}

module.exports.increase = async function(req , res){

    console.log(req.params.id);
    let id = req.params.id

    let plant = await Cart.findByIdAndUpdate(id);
    plant.qty += 1;
    plant.save();
    console.log(plant);

    return res.redirect('back');
}

module.exports.decrease = async function(req , res){
    console.log(req.params.id);
    let id = req.params.id

    let plant = await Cart.findByIdAndUpdate(id);
    if(plant.qty > 1)
    {
        plant.qty -= 1;
    }
    plant.save();
    console.log(plant);

    return res.redirect('back');
}

module.exports.remove = async function(req , res){

    let id = req.params.id;
    let userid = req.params.userid;

    // console.log(id);
    // console.log(userid);
    
    let newuser = await User.updateOne(
        {_id : userid},
        {$pull :{ cart : id}}
    )
    // console.log(newuser);
    res.redirect('back');

}

module.exports.housecart = async function(req , res){
    try{
        console.log(req.params.id);
        console.log(req.params.userid);
        let id = req.params.id
        let userid = req.params.userid;

        let user = await User.findById(userid);
    
        let plant = await HousePlant.findById(id);
        
            if(plant)
            {
                const cartitem = await Cart.create({
                    name : plant.name,
                    img : plant.img,
                    price : plant.price,
                    qty : 1,
                });

                user.cart.push(cartitem);
                user.save();
                // console.log(addcart);
                
                req.flash('success', 'Cart Added Succesfully');
                res.redirect('back');
            }
    }catch(err)
        {
            req.flash('error', err);
            return;
        }
        

}

module.exports.housecart1 = function(req , res){

    // console.log(req.params.id);
    // console.log(req.params.type)

    console.log(req.query.id);
    console.log(req.query.type);
    res.send("<h1> Hiiii </h1>")

}