const express = require('express');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

passport.use(new Strategy(
    function(username, password, cb) {
    //   db.users.findByUsername(username, function(err, user) {
    //     if (err) { return cb(err); }
    //     if (!user) { return cb(null, false); }
    //     if (user.password != password) { return cb(null, false); }
    //     return cb(null, user);
    //   });
        // return cb("error test")

        return cb(null, { id: "1"});
    }));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
  passport.deserializeUser(function(id, cb) {
    // db.users.findById(id, function (err, user) {
    //   if (err) { return cb(err); }
    //   cb(null, user);
    // });
    return cb(null, { id: "1"});
  });
  
  

const app = express()
const port = 3000

app.use(passport.initialize());
app.use(passport.session());

app.get('/', 
    passport.authenticate('local'),
    (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))