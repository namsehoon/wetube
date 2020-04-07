import express from "express";
import routes from "../routes";
import { postRegisterView } from "../controllers/videoController";

const apiRouter = express.Router();

export default apiRouter;

apiRouter.post(routes.registerView, postRegisterView);
