const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'pk_test_YGlZJj90lqY3KN8EAZNW34cW'
    : 'pk_test_YGlZJj90lqY3KN8EAZNW34cW';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
