import { NextFunction, Request, Response, Router } from "express";
import { PassportStatic, Profile } from "passport";
import { Token } from "typescript";
require('dotenv').config();
const express = require('express');
const session = require("express-session");
const passport: PassportStatic = require("passport");

export const router: Router = express.Router();

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = "130759922240-tbj55oqkfptg9uca26o3lb5hk19pg1ms.apps.googleusercontent.com";
// Passport Setup
passport.use( new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.NODE_ENV == 'development' ? "http://localhost:3000/auth/google/callback" : "https://mealplanner.onrender.com/auth/google/callback",
    passReqToCallback: true
  },
  (request: Request, accessToken: any, refreshToken: any, profile: Profile, done: Function) => {
    return done(null, profile);
  }
//   function(accessToken, refreshToken, profile: Profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
));

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user: Express.User, done) => {
    done(null, user);
})

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    req.user ? next() : res.sendStatus(401)
}

// Passport Setup End

// Authentication route for logging in via Google oAuth
router.get("/auth/google", passport.authenticate('google', { scope: ['profile', 'email'] }));

// Authentication callback route for when google is done on it's end
router.get("/auth/google/callback",
    passport.authenticate('google',
        {
            successRedirect: '/isloggedin',
            failureRedirect: '/auth/google/failure'
        }
    )
);

router.get("/auth/google/failure", (req: Request, res: Response, next: NextFunction) => {
    res.send("Google authentication failed - redirecting to homepage");
    setTimeout(() => { res.redirect('/')}, 2000);
})

router.get("/isloggedin", isLoggedIn, (req: Request, res: Response) => {
    res.send(`hello ${req.user ? `${(req.user as Profile).displayName}, ${(req.user as Profile).emails![0].value}, <img src="${(req.user as Profile).photos![0].value.replace("s96-c", "s400")}" />` : null}!`)
})

router.get("/logout", (req: Request, res: Response) => {
    req.logout((err) => {
        res.send("Goodbye!")
    });
})