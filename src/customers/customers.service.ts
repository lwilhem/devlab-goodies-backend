import { Injectable, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception.filter';

@Injectable()
@UseFilters(HttpExceptionFilter)
export class CustomersService {}
