const PAYMENT_SERVER_URL = process.env.NODE.ENV === 'production'
    ? 'http://fairergiving.com'
    : 'https://localhost:7080';

export default PAYMENT_SERVER_URL;