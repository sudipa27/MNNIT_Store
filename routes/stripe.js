const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY)

router.post("/payment", (req,res)=>{
 stripe.charges.create({
    source:req.body.token,
    amount:req.body.amount,
    currency:"rupee",
 }, (stripeErr, stripeRes)=>{
   if(stripeErr){
    res.status(500).json(stripeErr)
   }else{
    res.status(200).json(stripeRes);
   }
 });
})
module.exports = router;