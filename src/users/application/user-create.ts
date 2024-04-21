import { Users } from "../domain/User";
import { UserRepository } from "../domain/user-repository";

export class UserCreate {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: Users) {
    await this.userRepository.createUser(user);
  }
}