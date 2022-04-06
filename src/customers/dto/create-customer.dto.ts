import { Exclude } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @Exclude()
  password: string;
}
