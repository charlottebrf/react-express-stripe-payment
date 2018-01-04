import React, {Component} from 'react';
import './index.css';
import Checkout from "./Checkout";

class StripePayment extends Component {

    render(){
        console.log(this.props.amount);
        return (
            <Checkout
                name={'The Road to learn React'}
                decsription={'Only the Book'}
                amount={1}
            />
        );
    }

}

export default StripePayment;