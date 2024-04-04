import { UserFindById } from "../../application/user-id-finder";
import { Request, Response } from "express";

export class UserController {
  constructor(private readonly userByIdFinder: UserFindById) {}

  async run(req: Request, res: Response) {
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
}
