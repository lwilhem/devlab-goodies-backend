import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma.service';
import { CreateUserDto } from '../entities/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async registerUser(createUserDto: CreateUserDto): Promise<User> {
    const alreadyExists = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });
    if (alreadyExists) throw new BadRequestException('User already Exists');

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);

    return await this.prisma.user.create({
      data: { ...createUserDto, password: hash },
    });
  }
}
