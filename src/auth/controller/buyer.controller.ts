import { Controller, Post } from '@nestjs/common';
import { BuyerService } from '../service/buyer.service';

@Controller('auth/buyer')
export class BuyerController {
  constructor(private readonly buyerService: BuyerService) {}

  @Post('register')
  async register() {
    return this.buyerService.registerBuyer();
  }

  @Post('login')
  async login() {
    return this.buyerService.logInBuyer();
  }
}
