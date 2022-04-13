import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { createProductDto } from '../entities/dto/create-product.dto';
import { updateProductDto } from '../entities/dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';
import { ProductsService } from '../service/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('/create')
  async createProduct(
    @Body() newProduct: createProductDto,
  ): Promise<ProductEntity> {
    const createProduct = await this.productsService.createProduct(newProduct);
    return createProduct;
  }

  @Get('/find')
  async getProducts() {
    return this.productsService.getAllProducts();
  }

  @Put('/update/:id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() productData: updateProductDto,
  ) {
    return this.productsService.updateProduct(id, productData);
  }

  @Delete('/delele/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteProduct(id);
  }
}
