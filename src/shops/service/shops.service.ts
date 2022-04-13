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
    private readonly shopRepository: Repository<ShopEntity>,
  ) {}

  async createShop(shop: createShopDto): Promise<ShopEntity> {
    const checkShop = await this.shopRepository.findOne({ name: shop.name });
    if (checkShop) throw new BadRequestException('Shop Already Exists');
    const newShop = this.shopRepository.create(shop);
    return newShop;
  }

  async getAllShops() {
    return this.shopRepository.find();
  }

  async updateShop(id: number, shop: updateShopDto) {
    const findShop = await this.shopRepository.findOne({ id: id });
    if (!findShop) throw new NotFoundException('shop not found');
    const newData = await this.shopRepository.update({ id: findShop.id }, shop);
    return newData;
  }

  async deleteShop(id: number) {
    const toDelete = this.shopRepository.findOne({ id: id });
    if (!toDelete) throw new NotFoundException('shop not found');
    const deletedShop = this.shopRepository.delete({ id: id });
    return deletedShop;
  }
}
