import express from "express";
import routes from "../routes";
import passport from "passport";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  getMe
} from "../controllers/userController";
import { onlyPublic } from "../middleware";
import { onlyPrivate } from "../middleware";
import {
  githubLogin,
  githubRehome,
  googleLogin,
  googleRehome
} from "../controllers/userController";

const globalRouter = express.Router();

export default globalRouter;

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.gitCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  githubRehome
);

globalRouter.get(routes.google, googleLogin);

globalRouter.get(
  routes.googleCallback,
  passport.authenticate("google", { failureRedirect: "/login" }),
  googleRehome
);

globalRouter.get(routes.me, getMe);
