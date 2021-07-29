/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import { connect } from "react-redux";
import * as actions from "../actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  render() {
    return (
      <div>
        <SurveyList />
        <div className='fixed-action-btn'>
          <Link to='/surveys/new' className='btn-floating btn-large red'>
            <i className='material-icons'>add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Dashboard);
