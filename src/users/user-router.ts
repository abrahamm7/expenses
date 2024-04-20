import express from "express";
import { userController } from "./dependencies";

export const userRouter = express.Router();

userRouter.get("/users", userController.findUser.bind(userController));
userRouter.get("/usersById", userController.findUserById.bind(userController));
