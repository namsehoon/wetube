import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pagetitle: "search", searchingBy, videos });
};

export const getUpload = (req, res) => {
  res.render("upload", { pagetitle: "upload" });
};

export const postUpload = (req, res) => {
  const {
    body: { file, title, Description }
  } = req;
  res.redirect(routes.videoDetail(1));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pagetitle: "videoDetail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pagetitle: "editVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pagetitle: "deleteVideo" });
