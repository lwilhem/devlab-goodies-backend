import { Controller, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';
import { CartsService } from '../service/carts.service';

@Controller('cart')
@ApiTags('Shop Carts')
@UseFilters(HttpExceptionFilter)
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}
}
