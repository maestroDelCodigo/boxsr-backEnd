const stripeSecretKey = 'sk_test_51Hc87kA0e2wVUT1FvUdpaTzuzw1EhedRXPZZvdW7KnB8bDgt3RIP9xvB91Mgnej9ZAU2HLWBu7E49uBaqe9NHfec000FXqUZJe'
const stripe = require('stripe')(stripeSecretKey);

const payment = async (req, res, next) => {
  try {
    const charge = await stripe.charges.create({
      amount: req.body.totalPedido * 100,
      currency: 'eur',
      source: req.body.id,

    });

    req.charge = charge;
    next();
  } catch (error) {
    res.json(error);
  }

};


module.exports = payment;

