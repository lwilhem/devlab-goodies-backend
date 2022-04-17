import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, nullable: false })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, nullable: false })
  password: string;
}
