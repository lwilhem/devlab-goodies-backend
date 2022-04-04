import { IsEmail, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
