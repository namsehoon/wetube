import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import passport from "passport";
import bodyParser from "body-parser";
import globlRouter from "./routers/globlRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localMiddleware } from "./middleware";

const app = express();
import "./passport";

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware);

app.use(routes.home, globlRouter);
app.use(routes.user, userRouter);
app.use(routes.videos, videoRouter);

export default app;
