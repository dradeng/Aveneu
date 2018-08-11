import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


//Passport Middleware
//app.use(passport.initialize());
//app.use(passport.session());
//Passport config
//require('../../services/authRoutes');
//app.get('*', function(req, res, next){
//  res.locals.user = req.user || null;
//  next();
//});


ReactDOM.render(<App />, document.querySelector('#root'));
