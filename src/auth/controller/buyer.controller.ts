import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';
import { CreateBuyerDto } from '../entities/dto/create-buyer.dto';
import { BuyerService } from '../service/buyer.service';

@Controller('auth/buyer')
@UseFilters(HttpExceptionFilter)
@ApiTags('Buyers')
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
