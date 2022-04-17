import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Product, Shop } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { createShopDto } from '../entities/dto/create-shop.dto';
import { updateShopDto } from '../entities/dto/update-shop.dto';

@Injectable()
export class ShopsService {
  constructor(private readonly prisma: PrismaService) {}

  async createShop(CreateShopDto: createShopDto): Promise<Shop> {
    const shopAlreadyExists = await this.prisma.shop.findUnique({
      where: { name: createShopDto.name },
    });
    if (shopAlreadyExists) throw new BadRequestException('Shop already exists');

    return this.prisma.shop.create({ data: CreateShopDto });
  }

  async readAllShops() {
    return this.prisma.shop.findMany();
  }

  async getShopById(id: number) {
    const findShop = await this.prisma.shop.findUnique({ where: { id: id } });
    if (!findShop) throw new NotFoundException('shop not found');

    return findShop;
  }

  async updateShop(id: number, shopData: updateShopDto) {
    const findShop = await this.prisma.shop.findUnique({ where: { id: id } });
    if (!findShop) throw new NotFoundException('Shop Not Found');

    return await this.prisma.shop.update({
      where: { id: id },
      data: shopData,
    });
  }

  async deleteShop(id: number) {
    const findShop = await this.prisma.shop.findUnique({ where: { id: id } });
    if (!findShop) throw new NotFoundException('Shop Not Found');

    return await this.prisma.shop.delete({ where: { id: id } });
  }

  async getShopProducts(id: number): Promise<Product[]> {
    const findShop = await this.prisma.shop.findUnique({ where: { id: id } });
    if (!findShop) throw new NotFoundException('Shop Does not exists');

    return await this.prisma.product.findMany({
      where: { shopId: findShop.id },
    });
  }
}
