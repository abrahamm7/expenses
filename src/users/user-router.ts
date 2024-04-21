import express from "express";
import { userController } from "./dependencies";

export const userRouter = express.Router();

userRouter.get("/getAll", userController.findUser.bind(userController));
userRouter.get("/getById", userController.findUserById.bind(userController));
userRouter.post("/create", userController.createUser.bind(userController));
