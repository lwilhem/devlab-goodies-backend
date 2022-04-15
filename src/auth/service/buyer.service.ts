import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class BuyerService {
  constructor(private readonly prisma: PrismaService) {}

  async registerBuyer() {
    return 'register buyer';
  }

  async logInBuyer() {
    return 'logged in buyer';
  }
}
