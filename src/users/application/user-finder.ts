import { UserRepository } from "../domain/user-repository";

export class UserFind {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    await this.userRepository.getUsers();
  }
}
