import { ApiProperty } from '@nestjs/swagger';

export class CreateRetainerDto {
  @ApiProperty({ type: String })
  name: string;
  @ApiProperty({ type: String })
  password: string;
  @ApiProperty({ type: String })
  email: string;
}
