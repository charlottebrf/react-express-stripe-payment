const STRIPE PUBLISHABLE = process.env.NODE_ENV === 'production'
    ? 'pk_test_MY_PUBLISHABLE KEY';
    : 'pk_test_YGlZJj90lqY3KN8EAZNW34cW';

export default STRIPE_PUBLISHABLE;