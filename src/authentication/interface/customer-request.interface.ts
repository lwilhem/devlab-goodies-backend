import { Request } from 'express';
import { Customer } from '../../customers/customer.entity';

export interface RequestWithCustomer extends Request {
  customer: Customer;
}
