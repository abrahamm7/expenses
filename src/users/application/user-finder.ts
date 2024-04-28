import { UserRepository } from "../domain/user-repository";

export class UserFind {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    return await this.userRepository.getUsers();
  }
}
