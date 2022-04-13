import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class GetProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async getProductById(id: number): Promise<ProductEntity> {
    const findProduct = await this.productRepository.findOne({ id: id });
    if (!findProduct) throw new NotFoundException('Product Not Found');
    return findProduct;
  }

  async getProductByName(name: string): Promise<ProductEntity> {
    const findByName = await this.productRepository.findOne({ name: name });
    if (!findByName) throw new NotFoundException('product not found');
    return findByName;
  }
}
