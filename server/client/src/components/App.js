import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const passport = require('passport');

const Header = () => <h2>Header</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="" component={Header} />
        </div>
      </BrowserRouter>

    </div>
  );
};

export default App;
