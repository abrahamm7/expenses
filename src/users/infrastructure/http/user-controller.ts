import { UserCreate } from "../../application/user-create";
import { UserFind } from "../../application/user-finder";
import { UserFindById } from "../../application/user-id-finder";
import { Request, Response } from "express";
import { Users } from "../../domain/User";

export class UserController {
  constructor(
    private readonly userByIdFinder: UserFindById,
    private readonly userFinder: UserFind,
    private readonly userCreate: UserCreate
  ) {}

  async findUserById(req: Request, res: Response) {
    await this.userByIdFinder
      .execute(parseInt(req.params.Id))
      .then((result) => {
        if (result != null) {
          res.status(200).send({ data: result });
        } else {
          res.status(404).send("User not found");
        }
      });
  }

  async findUser(req: Request, res: Response) {
    await this.userFinder.execute().then((result) => {
      if (result != null) {
        res.status(200).send({ data: result });
      } else {
        res.status(404).send("Users table is empty");
      }
    });
  }

  async createUser(req: Request, res: Response) {
    const user = new Users();
    user.userName = req.body.userName;
    user.email = req.body.email;

    await this.userCreate.execute(user).then((result) => {
      if (result != null) {
        res.status(200).send({ data: result });
      } else {
        res.status(500).send("Cannot add the user to database");
      }
    });
  }
}
