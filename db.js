import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

mongoose.connect(process.env.MONGO__DB, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("OOOOOOOOO connected to DB");
const handleError = error => console.log(`XXXXX${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
