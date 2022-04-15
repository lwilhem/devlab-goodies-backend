import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { createProductDto } from '../entities/dto/create-product.dto';
import { updateProductDto } from '../entities/dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(createProductDto: createProductDto): Promise<Product> {
    const alreadyExists = await this.prisma.product.findUnique({
      where: {
        name: createProductDto.name,
      },
    });
    if (alreadyExists) throw new BadRequestException('Product already exists');
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async updateProduct(id: number, newData: updateProductDto): Promise<Product> {
    const findProduct = await this.prisma.product.findUnique({ where: { id } });
    if (findProduct) {
      return this.prisma.product.update({
        where: { id: findProduct.id },
        data: newData,
      });
    } else throw new NotFoundException('product not found');
  }

  async deleteProduct(id: number): Promise<Product> {
    const product = this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new BadRequestException('Product not found');
    await this.prisma.product.delete({
      where: { id },
    });
    return product;
  }

  async getProductsByShop(shopId: number): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      where: { shopId },
    });
    if (!products) throw new NotFoundException('no products exists');
    return products;
  }
}
