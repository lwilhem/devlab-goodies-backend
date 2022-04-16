import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma.service';
import { CreateBuyerDto } from '../entities/dto/create-buyer.dto';

@Injectable()
export class BuyerService {
  constructor(private readonly prisma: PrismaService) {}

  async registerBuyer(createBuyerDto: CreateBuyerDto) {
    const checkBuyer = this.prisma.buyer.findUnique({
      where: { name: createBuyerDto.name },
    });
    if (checkBuyer) throw new BadRequestException('Buyer already exists');
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createBuyerDto.password, salt);
    return this.prisma.buyer.create({
      data: { ...createBuyerDto, password: hash },
    });
  }

  async logInBuyer() {
    return 'logged in buyer';
  }
}
