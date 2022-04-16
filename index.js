const express = require('express');
const app = express();

const bodyparser = require('body-parser')
const jwt = require('jsonwebtoken');
const path = require('path');
const Razorpay = require('razorpay');
require('dotenv').config()

const port = process.env.PORT || 8181;

const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser')

var instance = new Razorpay({
    key_id: 'rzp_test_uElnDqNi2OWs31',
    key_secret: 'sxN9p4Jz1uOf8MymaSksrpQU',
  });


const passport = require('passport');
const passportLocal  = require('./config/passportlocal')
const db = require('./config/mongoose');
const flash = require('connect-flash');
const customMware = require('./config/middleware');

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(expressLayouts);

app.set('layout extractStyles' , true);
app.set('layout extractScripts', true);

app.set('view engine' ,'ejs');
app.set('views', path.join(__dirname, 'views'))
app.set('views','./views');


app.use(cookieParser('secret'));
app.use(session({
    secret : 'secret',
    maxAge : (1000 * 60 * 60 * 24),
    resave : false,
    saveUninitialized :false,
}));



app.use(bodyparser.urlencoded({extended : true}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());   
app.use(customMware.setFlash);

app.use(express.static('./asset'));
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public'))); // IMP css
app.use('/uploads', express.static(process.cwd() + '/uploads')) //IMP images


app.get('/home/:price', function(req, res,next){
	res.render('home', {
	key: Publishable_Key,
    price : req.params.price
	})

    next();
})

app.use('/' ,require('./routes'));

app.post('/create/orderId' , (req , res) =>{
    console.log('create orderId request' , req.body)
    var options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        res.send({orderId : order.id});
      });
})

app.post("/api/payment/verify",(req,res)=>{

    let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
   
     var crypto = require("crypto");
     var expectedSignature = crypto.createHmac('sha256', 'Wok5mJv2F0pa5HKLeXZfUr9r')
                                     .update(body.toString())
                                     .digest('hex');
                                     console.log("sig received " ,req.body.response.razorpay_signature);
                                     console.log("sig generated " ,expectedSignature);
     var response = {"signatureIsValid":"false"}
     if(expectedSignature === req.body.response.razorpay_signature)
      response={"signatureIsValid":"true"}
         res.send(response);
});
   
   

app.listen(port , function(err){
    if(err)
    {
        console.log(`Error in running server : ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});