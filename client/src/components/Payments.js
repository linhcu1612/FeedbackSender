/** @format */

import React, { Component } from "react";
import StripeScheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeScheckout
        name='Emaily'
        description='$5 for 5 email credits'
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button className='btn btn-primary'>Add Credits</button>
      </StripeScheckout>
    );
  }
}

export default connect(null, actions)(Payments);
