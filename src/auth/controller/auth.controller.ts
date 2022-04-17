import { Controller, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';

@Controller('auth')
@UseFilters(HttpExceptionFilter)
@ApiTags('Authentication & Authorization')
export class AuthController {}
