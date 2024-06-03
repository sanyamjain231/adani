// src/config/passport.ts
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const users: Record<string, any> = {}; // A simple in-memory user store

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj:any, done) => {
  done(null, obj);
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  callbackURL: process.env.CALLBACK_URL as string
},
(token, tokenSecret, profile, done) => {
  const user:any = {
    id: profile.id,
    displayName: profile.displayName,
    emails: profile.emails,
    token: jwt.sign({ id: profile.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' })
  };
  users[profile.id] = user;
  return done(null, user);
}));

export const authenticateJWT = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = users[(user as any).id];
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
