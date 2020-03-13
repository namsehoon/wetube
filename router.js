import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("funck you"));
