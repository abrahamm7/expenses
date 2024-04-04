import { User } from "../../domain/User";
import { UserRepository } from "../../domain/user-repository";

export class SqlUserRepository implements UserRepository {
  async getById(id: Number): Promise<User | null> {
    return null;
  }
}
