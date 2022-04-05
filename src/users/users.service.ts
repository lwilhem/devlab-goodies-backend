import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto) {
    const newUser = await this.userRepository.create(user);
    await this.userRepository.save(user);
    return newUser;
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOneById(id: number) {
    return this.userRepository.findOne({ id: id });
  }

  async updateUser(id: number, newData: UpdateUserDto) {
    await this.userRepository.update(id, newData);
    const updatedUser = this.userRepository.findOne({ id: id });
    if (updatedUser) return updatedUser;
    else throw new NotFoundException('user not found');
  }

  async removeUser(id: number) {
    const deleteReponse = await this.userRepository.delete({ id: id });
    if (!deleteReponse.affected) throw new NotFoundException('User not found');
    else return 'user deleted';
  }
}
