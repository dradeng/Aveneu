import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const passport = require('passport');


//Passport config
require('../../../services/authRoutes');


//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req, res, next){
  res.locals.user = req.user || null;
  next();
});

const App = () => {
  return (
    <div>
      hi there
    </div>
  );
};

export default App;
