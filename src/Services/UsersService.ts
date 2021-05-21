import { getCustomRepository } from 'typeorm';
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    // Passos
    //Verificar de usuário existe
    const userExists = await usersRepository.findOne({
      email,
    });
    //Se existir, retornar usuário
    if (userExists) {
      return userExists;
    }

    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);

    //Se não existir, salvar no banco de dados
    return user;
  }

}

export { UsersService };