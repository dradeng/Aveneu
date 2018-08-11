const passport = require('passport');
const bcrypt = require('bcryptjs');
module.exports = (app) => {

  app.get('/register', (req, res) => {
    res.render('Register');
  });

  app.post('/register', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password2);

    let errors = req.validationErros();

    if(errors) {
      res.render('regsiter', {
        errors:errors
      });
    } else {
      let newUser = newUser = new User({
        name:name,
        email:email,
        username:username,
        password: password
      });

      bcrypt.getSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
          if(err){
            console.log(err);

          }
          newUser.password = hash
          newUser.save(function(err){
            if(err){
              console.log(err);
              return;
            } else {
              req.flash('success', 'you are now registered and can log in');
              res.redirect('/users/login');
            }
          });
        });
      });
    }
  });

//Login Form

  app.get('/login', (req, res) => {
    res.render('login');
  });

  //Login process
  app.post('/login', (req, res) => {
    passport.authenticate('local', {
      successRedirect:'/',
      failuareRedirect:'/users/login',
      failerFlash: true
    })(req,res,next);
  });

  //Logout
  app.get('/logout', function(req, res){
    req.logout();
    req.flash('success', 'you are logged out');
    res.redirect('/users/login');
  });
};
