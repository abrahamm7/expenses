import { Users } from "../../domain/User";
import { UserRepository } from "../../domain/user-repository";
import { DataSource } from "typeorm";

export class SqlUserRepository implements UserRepository {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async getUsers(): Promise<Users[] | null> {
    const users = this.dataSource.getRepository(Users).find();
    return await users;
  }

  async getById(id: Number): Promise<Users | null> {
    return null;
  }
}
