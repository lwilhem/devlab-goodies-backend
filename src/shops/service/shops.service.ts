import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopEntity } from '../entities/shop.entity';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(ShopEntity)
    private readonly shopRepository: Repository<ShopEntity>,
  ) {}
}
