import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class RetainerService {
  constructor(private readonly prisma: PrismaService) {}

  async createRetainer() {
    return 'created retainer';
  }

  async logInRetainer() {
    return 'logged in retainer';
  }
}
