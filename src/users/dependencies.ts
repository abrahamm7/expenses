import { UserFindById } from "./application/user-id-finder";
import { UserController } from "./infrastructure/http/user-controller";

export const userByIdFinder = new UserFindById();
export const userController = new UserController(userByIdFinder);
