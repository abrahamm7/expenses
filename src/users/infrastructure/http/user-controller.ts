import { UserFind } from "../../application/user-finder";
import { UserFindById } from "../../application/user-id-finder";
import { Request, Response } from "express";

export class UserController {
  constructor(
    private readonly userByIdFinder: UserFindById,
    private readonly userFinder: UserFind
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
}
