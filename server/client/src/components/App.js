import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import * as actions from '../actions';


class App extends Component {
//  componentDidMount() {
//    this.props.fetchUser();
//  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <p>Welcome to Aveneu</p>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
