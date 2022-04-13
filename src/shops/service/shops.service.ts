import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createShopDto } from '../entities/dto/create-shop.dto';
import { updateShopDto } from '../entities/dto/update-shop.dto';
import { ShopEntity } from '../entities/shop.entity';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(ShopEntity)
    private shopRepository: Repository<ShopEntity>,
  ) {}

  async createShop(shop: createShopDto): Promise<ShopEntity> {
    const shopAlreadyExists = await this.shopRepository.findOne({
      name: shop.name,
    });
    if (shopAlreadyExists) throw new BadRequestException('Shop already exists');
    const save = this.shopRepository.save(shop);
    return save;
  }

  async readAllShops() {
    return this.shopRepository.find();
  }

  async updateShop(id: number, shopData: updateShopDto) {
    const findShop = await this.shopRepository.findOne({ id: id });
    if (!findShop) throw new NotFoundException('Shop Not Found');
    const updateData = await this.shopRepository.update({ id: id }, shopData);
    return updateData;
  }

  async deleteShop(id: number) {
    const findShop = await this.shopRepository.findOne({ id: id });
    if (!findShop) throw new NotFoundException('Shop Not Found');
    const deleteData = this.shopRepository.delete({ id: id });
    return deleteData;
  }
}
