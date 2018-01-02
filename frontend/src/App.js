import React, { Component } from 'react';
import Gateway from './Gateway';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import StripePayment from "./StripePayment";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Humanity X Giving Gateway!</h1>
        </header>
        <p className="App-intro">
            <section className="App-content">
            <Switch>
                <Route exact path="/" component={Gateway}/>
                <Route path="/stripe-payment" component={StripePayment}/>
            </Switch>
            </section>
        </p>
      </div>
    );
  }
}

export default App;
