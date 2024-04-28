import { Users } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";
import { DataSource } from "typeorm";

export class SqlUserRepository implements UserRepository {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  async createUser(user: Users): Promise<Users> {
    return await this.dataSource.getRepository(Users).save(user);
  }

  async getUsers(): Promise<Users[] | null> {
    return await this.dataSource.getRepository(Users).find();
  }

  async getById(userId: Number): Promise<Users[] | null> {
    return await this.dataSource
      .getRepository(Users)
      .find({ where: { userId: userId } });
  }
}
