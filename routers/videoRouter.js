import express from "express";
import routes from "../routes";
import {
  postUpload,
  videoDetail,
  editVideo,
  deleteVideo,
  getUpload
} from "../controllers/videoController";
import { uploadMulter } from "../middleware";

const videoRouter = express.Router();

export default videoRouter;

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadMulter, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
