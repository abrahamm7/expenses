import { Users } from "./User";

export interface UserRepository {
  getUsers(): Promise<Users[] | null>;
  getById(id: Number): Promise<Users | null>;
  createUser(user: Users): Promise<Users | null>;
}
