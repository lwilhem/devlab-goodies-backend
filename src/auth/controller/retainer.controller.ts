import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';
import { CreateRetainerDto } from '../entities/dto/create-retainer.dto';
import { RetainerService } from '../service/retainer.service';

@Controller('auth/retainer')
@UseFilters(HttpExceptionFilter)
@ApiTags('Retainers')
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
