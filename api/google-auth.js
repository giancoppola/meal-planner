"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
require('dotenv').config();
var express = require('express');
var session = require("express-session");
var passport = require("passport");
exports.router = express.Router();
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var GOOGLE_CLIENT_ID = "130759922240-tbj55oqkfptg9uca26o3lb5hk19pg1ms.apps.googleusercontent.com";
// Passport Setup
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.NODE_ENV == 'development' ? "http://localhost:3000/auth/google/callback" : "https://mealplanner.onrender.com/auth/google/callback",
    passReqToCallback: true
}, function (request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
}
//   function(accessToken, refreshToken, profile: Profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
));
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
var isLoggedIn = function (req, res, next) {
    req.user ? next() : res.sendStatus(401);
};
// Passport Setup End
// Authentication route for logging in via Google oAuth
exports.router.get("/auth/google", passport.authenticate('google', { scope: ['profile', 'email'] }));
// Authentication callback route for when google is done on it's end
exports.router.get("/auth/google/callback", passport.authenticate('google', {
    successRedirect: '/isloggedin',
    failureRedirect: '/auth/google/failure'
}));
exports.router.get("/auth/google/failure", function (req, res, next) {
    res.send("Google authentication failed - redirecting to homepage");
    setTimeout(function () { res.redirect('/'); }, 2000);
});
exports.router.get("/isloggedin", isLoggedIn, function (req, res) {
    res.send("hello ".concat(req.user ? "".concat(req.user.displayName, ", ").concat(req.user.emails[0].value, ", <img src=\"").concat(req.user.photos[0].value.replace("s96-c", "s400"), "\" />") : null, "!"));
});
exports.router.get("/logout", function (req, res) {
    req.logout(function (err) {
        res.send("Goodbye!");
    });
});
