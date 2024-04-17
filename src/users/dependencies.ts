import { UserFindById } from "./application/user-id-finder";
import { UserController } from "./infrastructure/http/user-controller";
import { SqlUserRepository } from "./infrastructure/user-repository/sql-user-repository";

export const sqlUserRepository = new SqlUserRepository();
export const userByIdFinder = new UserFindById(sqlUserRepository);
export const userController = new UserController(userByIdFinder);
