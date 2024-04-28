import { Users } from "./User";

export interface UserRepository {
  getUsers(): Promise<Users[] | null>;
  getById(userId: Number): Promise<Users[] | null>;
  createUser(user: Users): Promise<Users | null>;
}
