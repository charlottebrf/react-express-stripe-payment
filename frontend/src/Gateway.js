import React, {Component} from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';


class Gateway extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {amount: 1};
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = amount => {
        this.setState({
            amount
        });
    };

    handleClick(e) {
        e.preventDefault();
        this.props.history.push(`/stripe-payment/${this.state.amount}`);
    }

    render() {
        const {amount} = this.state;
        console.log(amount);
        return (
            <section className="Amount">
                <Slider
                    min={1}
                    max={500}
                    value={amount}
                    onChange={this.handleChange}
                />
                <p> You're about to donate £{amount}</p>
                <button onClick={this.handleClick}>Pay by Card</button>
                <button> Pay by Apple Pay</button>
                <button> Pay by Android Pay</button>
            </section>
        );
    }
}

export default Gateway;