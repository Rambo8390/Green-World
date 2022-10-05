

module.exports.pay = function(req , res){
    console.log(req.params.price);

    res.render('standard', {
        price : (req.params.price * 100)
        })

}

