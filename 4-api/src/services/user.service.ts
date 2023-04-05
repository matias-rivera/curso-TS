import { CreateUserDto } from "../models/dtos/create-user.dto";
import { UpdateUserDto } from "../models/dtos/update-user.dto";
import { User } from "../models/entities/user";
import UserRepository from "../repositories/user.repository";

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  public async getUser(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }
  
  public createUser(createUserDto: CreateUserDto) {
    const id = new Date().getTime().toString();
    const user = new User(id, createUserDto.name, createUserDto.email);
    return this.userRepository.create(user);
  }

  public async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne(id);
    user.name = updateUserDto.name || user.name;
    user.email = updateUserDto.email || user.email;
    return this.userRepository.update(user);
  }

  public async removeUser(id: string): Promise<void> {
    return this.userRepository.remove(id);
  }
}

export default UserService;