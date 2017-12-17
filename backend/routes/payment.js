const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
    if(stripeErr) {
        res.status(500).send({ error: stripeErr});
    } else {
        res.stats(200).send({ success: stripeRes});
    }
}

const paymentApi = app => {
 app.get('/', (req, res) => {
     res.send({ message: 'Hello Stripe checkout sever!', timestamp: new Date().toISOString() })
 });

 app.post('/', (req, res) => {
     stripe.charges.create(req.body, postStripeCharge(res))
  });

 return app;
 };

 module.exports = paymentApi;