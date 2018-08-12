import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';



const store = createStore(() => [], {}, applyMiddleware());
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
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
