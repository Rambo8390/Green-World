// var Publishable_Key = "pk_test_51Ji4aeSBVcghPSzlDghpN8ceaD6XM2giidfcYyOglDAPLxwQrYRRWTZxeaILbxoLP74CqRRuJlCZSXDnRQsEC0J000jrl3CeaM"
// var Secret_Key = "sk_test_51Ji4aeSBVcghPSzlubPyKiYcmkiUxobNngXNBlsbynsMKex57DpnrDeiUvfAhTbGJEkFUhA2BQt8n5wPEa3lxW1900PVsRW97b"

// const stripe = require('stripe')(Secret_Key)

module.exports.pay = function(req , res){
    console.log(req.params.price);

    res.render('standard', {
        price : (req.params.price * 100)
        })

}

// module.exports.payment = function(req , res){

//     // Moreover you can take more details from user
// 	// like Address, Name, etc from form
// 	stripe.customers.create({
// 		email: req.body.stripeEmail,
// 		source: req.body.stripeToken,
// 		name: 'Sagnik Purkait',
// 		address: {
// 			line1: 'TC 9/4 Old MES colony',
// 			postal_code: '452331',
// 			city: 'Indore',
// 			state: 'Madhya Pradesh',
// 			country: 'India',
// 		}
// 	})
// 	.then((customer) => {

// 		return stripe.charges.create({
// 			amount: 233200,	 // Charing Rs 25
// 			description: 'Plant Products',
// 			currency: 'INR',
// 			customer: customer.id
// 		});
// 	})
// 	.then((charge) => {
// 		res.send("Success") // If no error occurs
// 	})
// 	.catch((err) => {
// 		res.send(err)	 // If some error occurs
// 	});

// }