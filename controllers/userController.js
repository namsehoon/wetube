import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pagetitle: "join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pagetitle: "join" });
  } else {
    // 사용자 등록
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pagetitle: "login" });
};

export const postLogin = (req, res) => {
  res.redirect(route.home);
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { pagetitle: "users" });

export const userDetail = (req, res) =>
  res.render("userDetail", { pagetitle: "userDetail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pagetitle: "editProfile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pagetitle: "changePassword" });
