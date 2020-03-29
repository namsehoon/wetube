import routes from "../routes";
import User from "../models/User";
import passport from "passport";

export const getJoin = (req, res) => {
  res.render("join", { pagetitle: "join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pagetitle: "join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const githubLogin = passport.authenticate("github");

export const getLogin = (req, res) => {
  res.render("login", { pagetitle: "login" });
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const githubgogo = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl: avatar_url
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const githubRehome = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const getMe = (req, res) => {
  res.render("userDetail", { pagetitle: "userDetail", user: req.user });
};

export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = User.findById(id);
    res.render("userDetail", { pagetitle: "userDetail", user });
  } catch (error) {
    res.redirect(route.home);
  }
};

export const getEditProfile = (req, res) =>
  res.render("editProfile", { pagetitle: "editProfile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pagetitle: "changePassword" });
