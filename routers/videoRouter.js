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

const videoRouter = express.Router();

export default videoRouter;

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadMulter, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);
