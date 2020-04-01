import "./db";
import app from "./app";
import dotenv from "dotenv";
import User from "./models/User";
import Comment from "./models/Comment";
import Video from "./models/Video";
dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`Listening to home: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
