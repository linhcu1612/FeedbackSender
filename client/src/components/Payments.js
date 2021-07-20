/** @format */

import React, { Component } from "react";
import StripeScheckout from "react-stripe-checkout";

export default class Payments extends Component {
  render() {
    return (
      <StripeScheckout
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}
