import { UserRepository } from "../domain/user-repository";

export class UserFindById {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: Number) {
    return await this.userRepository.getById(userId);
  }
}
