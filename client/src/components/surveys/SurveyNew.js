/** @format */

import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <>
        {page === 1 && <SurveyForm onSubmit={this.nextPage} />}
        {page === 2 && (
          <SurveyFormReview
            onSubmit={onSubmit}
            previousPage={this.previousPage}
          />
        )}
      </>
    );
  }
}

export default SurveyNew;
