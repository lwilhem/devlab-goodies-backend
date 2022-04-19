import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma.service';
import { CreateUserDto } from '../entities/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async logoutUser(id: number) {
    return id;
  }

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

  async validateUserCredentials(
    username: string,
    password: string,
  ): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { username } });
    if (!user) throw new NotFoundException('User not found');

    const verifyPassword = await bcrypt.compare(password, user.password);
    if (verifyPassword) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginWithCredentials(user: User) {
    const payload = { username: user.username, sub: user.id, role: user.role };

    return {
      access_token: this.jwt.sign(payload),
    };
  }
}
