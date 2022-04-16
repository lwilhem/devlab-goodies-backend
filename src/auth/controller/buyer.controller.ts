import { Body, Controller, Post } from '@nestjs/common';
import { CreateBuyerDto } from '../entities/dto/create-buyer.dto';
import { BuyerService } from '../service/buyer.service';

@Controller('auth/buyer')
export class BuyerController {
  constructor(private readonly buyerService: BuyerService) {}

  @Post('register')
  async register(@Body() createByerDto: CreateBuyerDto) {
    return this.buyerService.registerBuyer(createByerDto);
  }

  @Post('login')
  async login() {
    return this.buyerService.logInBuyer();
  }
}
