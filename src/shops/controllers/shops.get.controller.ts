import { Controller } from '@nestjs/common';
import { ShopsService } from '../service/shops.service';

@Controller('shops')
export class ShopsGetController {
  constructor(private readonly shopService: ShopsService) {}
}
