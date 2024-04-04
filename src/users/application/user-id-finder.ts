import { UserRepository } from "../domain/user-repository";

export class UserFindById {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: Number) {
    const user = await this.userRepository.getById(id);
  }
}
