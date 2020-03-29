import express from "express";
import routes from "../routes";
import {
  postUpload,
  videoDetail,
  getEditVideo,
  deleteVideo,
  getUpload,
  postEditVideo
} from "../controllers/videoController";
import { uploadMulter } from "../middleware";
import { onlyPrivate } from "../middleware";

const videoRouter = express.Router();

export default videoRouter;

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadMulter, postUpload);

videoRouter.get(routes.videoDetail(), onlyPrivate, videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
