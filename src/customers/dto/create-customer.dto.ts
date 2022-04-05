import { IsEmail, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  password: string;

  @IsEmail()
  @IsString()
  email: string;
}
