const passport = require('passport');

module.exports = (app) => {


  // Sublet Model
  const Sublet = require('../models/Sublet');
  // User Model
  const User = require('../models/User');

  // Add Route
  app.get('/add', ensureAuthenticated, function(req, res){
    res.render('add_sublet', {
      title:'Add Sublet'
    });
  });

  // Add Submit POST Route
  app.post('/add', function(req, res){
    req.checkBody('title','Title is required').notEmpty();
    //req.checkBody('author','Author is required').notEmpty();
    req.checkBody('body','Body is required').notEmpty();

    // Get Errors
    const errors = req.validationErrors();

    if(errors){
      res.render('add_sublet', {
        title:'Add Sublet',
        errors:errors
      });
    } else {
      const sublet = new Sublet();
      sublet.title = req.body.title;
      sublet.author = req.user._id;
      sublet.body = req.body.body;

      sublet.save(function(err){
        if(err){
          console.log(err);
          return;
        } else {
          req.flash('success','Sublet Added');
          res.redirect('/');
        }
      });
    }
  });

  // Load Edit Form
  app.get('/edit/:id', ensureAuthenticated, function(req, res){
    Sublet.findById(req.params.id, function(err, sublet){
      if(sublet.author != req.user._id){
        req.flash('danger', 'Not Authorized');
        res.redirect('/');
      }
      res.render('edit_sublet', {
        title:'Edit Sublet',
        sublet:sublet
      });
    });
  });

  // Update Submit POST Route
  app.post('/edit/:id', (req, res) => {
    const sublet = {};
    sublet.title = req.body.title;
    sublet.author = req.body.author;
    sublet.body = req.body.body;

    const query = {_id:req.params.id}

    Sublet.update(query, sublet, (err) => {
      if(err){
        console.log(err);
        return;
      } else {
        req.flash('success', 'Sublet Updated');
        res.redirect('/');
      }
    });
  });

  // Delete Sublet
  app.delete('/:id', (req, res) => {
    if(!req.user._id){
      res.status(500).send();
    }

    const query = {_id:req.params.id}

    Sublet.findById(req.params.id, (err, sublet) => {
      if(sublet.author != req.user._id){
        res.status(500).send();
      } else {
        Sublet.remove(query, (err) => {
          if(err){
            console.log(err);
          }
          res.send('Success');
        });
      }
    });
  });

  // Get Single Sublet
  app.get('/:id', (req, res) => {
    Sublet.findById(req.params.id, (err, sublet) => {
      User.findById(sublet.author, (err, user) => {
        res.render('sublet', {
          sublet:sublet,
          author: user.name
        });
      });
    });
  });

  // Access Control
  function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
      return next();
    } else {
      req.flash('danger', 'Please login');
      res.redirect('/users/login');
    }
  }

};
