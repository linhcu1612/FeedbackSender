/** @format */
import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

const FIELDS = [
  { name: "title", label: "Survey Title" },
  { name: "subject", label: "Subject Line" },
  { name: "body", label: "Email Body" },
  { name: "emails", label: "Recipients List" },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ name, label }) => {
      return (
        <Field
          type='text'
          component={SurveyField}
          name={name}
          label={label}
          key={name}
        />
      );
    });
  }

  render() {
    return (
      <>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}>
          {this.renderFields()}
          <Link to='/surveys' className='red btn-flat white-text'>
            Cancel
          </Link>
          <button type='submit' className='teal btn-flat right white-text'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  if (!errors.emails) {
    values.emails.split(",").map((email) => {
      if (!email.includes("@")) {
        errors.emails = "You must provide a valid email address";
      }
    });
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
})(SurveyForm);
