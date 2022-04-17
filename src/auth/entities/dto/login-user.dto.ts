import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class loginUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, nullable: false })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, nullable: false })
  readonly password: string;
}
