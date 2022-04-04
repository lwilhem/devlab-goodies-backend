import { Controller, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { CustomersService } from './customers.service';

@Controller('customers')
@UseFilters(HttpExceptionFilter)
export class CustomersController {
  constructor(private customersService: CustomersService) {}
}
