import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Get('read')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('read/:id')
  async findOne(@Param('id') id: string) {
    const customer = await this.usersService.findOneById(+id);
    if (customer) return customer;
    else throw new NotFoundException('User not found');
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
