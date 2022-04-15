import { Controller, Post } from '@nestjs/common';
import { RetainerService } from '../service/retainer.service';

@Controller('auth/retainer')
export class RetainerController {
  constructor(private readonly retainerService: RetainerService) {}

  @Post('register')
  async registerRetainer() {
    return this.retainerService.createRetainer();
  }

  @Post('login')
  async loginRetainer() {
    return this.retainerService.logInRetainer();
  }
}
