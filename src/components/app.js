import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <h1>My Mental State</h1>
        <h2>James D's Portfolio</h2>
        <PortfolioContainer />
      </div>
    );
  }
}
