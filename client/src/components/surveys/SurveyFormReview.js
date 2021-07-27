/** @format */
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import formFields from "./formField";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div className='' key={name}>
        <label htmlFor=''>{label}</label>
        <div className=''>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <>
      <h5>Survey Form Review</h5>
      {reviewFields}
      <button
        className='yellow white-text btn-flat darken-3'
        onClick={onCancel}>
        Back
      </button>
      <button
        className='green btn-flat right white-text'
        onClick={() => submitSurvey(formValues, history)}>
        Send Survey
        <i className='material-icons right'>email</i>
      </button>
    </>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
