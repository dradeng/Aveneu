import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(reducers, {}, applyMiddleware());
//Passport Middleware
//app.use(passport.initialize());
//app.use(passport.session());
//Passport config
//require('../../services/authRoutes');
//app.get('*', function(req, res, next){
//  res.locals.user = req.user || null;
//  next();
//});


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
