/** @format */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";
import Landing from "./Landing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className=''>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route exact path='/surveys/new' component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
