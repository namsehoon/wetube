import passport from "passport";
import User from "./models/User";
import routes from "./routes";
import GithubStrategy from "passport-github";
import { githubgogo, googleGogo } from "./controllers/userController";
import GoogleStrategy from "passport-google-oauth20";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: `http://localhost:4000${routes.gitCallback}`
    },
    githubgogo
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleClientId,
      clientSecret: process.env.googleClientSecret,
      callbackURL: "http://localhost:4000/auth/google/callback"
    },
    googleGogo
  )
);

//문제있음
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
