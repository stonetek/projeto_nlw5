import { Repository } from 'typeorm';
import { getCustomRepository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    // Passos
    //Verificar de usuário existe
    const userExists = await this.usersRepository.findOne({
      email,
    });
    //Se existir, retornar usuário
    if (userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);

    //Se não existir, salvar no banco de dados
    return user;
  }

}

export { UsersService };