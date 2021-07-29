/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import SurveyListItem from "./SurveyListItem";

class SurveyList extends Component {
  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return <SurveyListItem key={survey._id} {...survey} />;
    });
  }

  render() {
    return <div className=''>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps)(SurveyList);
