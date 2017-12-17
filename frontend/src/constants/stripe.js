const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
    ? 'pk_test_YGlZJj90lqY3KN8EAZNW34cW'
    : 'pk_test_YGlZJj90lqY3KN8EAZNW34cW';

export default  STRIPE_PUBLISHABLE;