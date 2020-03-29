import passport from "passport";
import User from "./models/User";
import routes from "./routes";
import GithubStrategy from "passport-github";
import { githubgogo } from "./controllers/userController";

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

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
