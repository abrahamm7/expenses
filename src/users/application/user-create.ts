import { Users } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

export class UserCreate {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: Users) {
    return await this.userRepository.createUser(user);
  }
}
