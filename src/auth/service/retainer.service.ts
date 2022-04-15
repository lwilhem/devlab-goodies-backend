import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateRetainerDto } from '../entities/dto/create-retainer.dto';

@Injectable()
export class RetainerService {
  constructor(private readonly prisma: PrismaService) {}

  async createRetainer(createRetainerDto: CreateRetainerDto) {
    const duplicateDetection = await this.prisma.retainer.findUnique({
      where: { name: CreateRetainerDto.name },
    });
    if (duplicateDetection)
      throw new BadRequestException('Retainer Already Exists');
    return await this.prisma.retainer.create({ data: createRetainerDto });
  }

  async logInRetainer() {
    return 'logged in retainer';
  }
}
