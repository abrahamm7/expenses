import { UserRepository } from "../domain/user-repository";

export class UserFind {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    const user = await this.userRepository.getUsers();
  }
}
