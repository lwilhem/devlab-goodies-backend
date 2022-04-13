import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopEntity } from '../entities/shop.entity';

@Injectable()
export class ShopsGetService {
  constructor(
    @InjectRepository(ShopEntity)
    private shopRepository: Repository<ShopEntity>,
  ) {}

  async getShopById(id: number) {
    const findShop = await this.shopRepository.findOne({ id: id });
    if (!findShop) throw new NotFoundException('shop not found');
    return findShop;
  }
}
