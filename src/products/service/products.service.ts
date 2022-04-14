import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { createProductDto } from '../entities/dto/create-product.dto';
import { updateProductDto } from '../entities/dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(product: createProductDto): Promise<ProductEntity> {
    const alreadyExists = await this.productRepository.findOne({
      name: product.name,
    });
    if (alreadyExists) throw new BadRequestException('Product already exists');
    const saveProduct = this.productRepository.save(product);
    return saveProduct;
  }

  async getAllProducts() {
    return this.productRepository.find();
  }

  async updateProduct(id: number, newData: updateProductDto) {
    const findProduct = await this.productRepository.findOne({ id: id });
    if (findProduct) {
      const updateProduct = this.productRepository.update(
        { id: findProduct.id },
        newData,
      );
      return updateProduct;
    } else throw new NotFoundException('product not found');
  }

  async deleteProduct(id: number): Promise<DeleteResult> {
    const findProduct = await this.productRepository.findOne({ id: id });
    const deleteProduct = this.productRepository.delete({
      id: findProduct.id,
    });
    return await deleteProduct;
  }
}
