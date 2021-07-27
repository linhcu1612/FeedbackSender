/** @format */
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formField";

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <>
        <div className='' key={name}>
          <label htmlFor=''>{label}</label>
          <div className=''>{formValues[name]}</div>
        </div>
      </>
    );
  });

  return (
    <>
      <h5>Survey Form Review</h5>
      {reviewFields}
      <button className='yellow darken-3 btn-flat' onClick={onCancel}>
        Cancel
      </button>
    </>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
