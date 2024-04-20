import { AppDataSource } from "../database/database";
import { UserFind } from "./application/user-finder";
import { UserFindById } from "./application/user-id-finder";
import { UserController } from "./infrastructure/http/user-controller";
import { SqlUserRepository } from "./infrastructure/user-repository/sql-user-repository";
import { DataSource } from "typeorm";

export const sqlUserRepository = new SqlUserRepository(AppDataSource);
export const userByIdFinder = new UserFindById(sqlUserRepository);
export const userFinder = new UserFind(sqlUserRepository);
export const userController = new UserController(userByIdFinder, userFinder);
