import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsString()
  @ApiProperty({ type: String, nullable: false })
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @ApiProperty({ type: String, nullable: false })
  @IsNotEmpty()
  email: string;

  @IsString()
  @ApiProperty({ type: String, nullable: false })
  @IsNotEmpty()
  password: string;

  @IsString()
  @ApiProperty({ type: String, nullable: true })
  avatar?: string;
}
