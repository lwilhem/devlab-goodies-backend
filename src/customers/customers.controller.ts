import { Controller, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception.filter';

@Controller('customers')
@UseFilters(HttpExceptionFilter)
export class CustomersController {}
