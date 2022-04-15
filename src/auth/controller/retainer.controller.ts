import { Body, Controller, Post } from '@nestjs/common';
import { CreateRetainerDto } from '../entities/dto/create-retainer.dto';
import { RetainerService } from '../service/retainer.service';

@Controller('auth/retainer')
export class RetainerController {
  constructor(private readonly retainerService: RetainerService) {}

  @Post('register')
  async registerRetainer(@Body() newRetainer: CreateRetainerDto) {
    return this.retainerService.createRetainer(newRetainer);
  }

  @Post('login')
  async loginRetainer() {
    return this.retainerService.logInRetainer();
  }
}
