import express from "express";
import { userController } from "./dependencies";

export const userRouter = express.Router();

userRouter.get("/", userController.run.bind(userController));
