import multer from "multer";
import routes from "./routes";

const uploadMiddle = multer({ dest: "uploads/videos/" });
const avatarMiddle = multer({ dest: "uploads/avatars/" });

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};
//사용자 아니니까 접근 할 수 있는 곳이 한정되어 있음.
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(route.home);
  } else {
    next();
  }
};
//사용자를 위한 미들웨어
export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadMulter = uploadMiddle.single("videoFile");
export const avatarMulter = avatarMiddle.single("avatar");
