import { ApiProperty } from '@nestjs/swagger';

export class updateShopDto {
  @ApiProperty({ type: String })
  name: string;
  @ApiProperty({ type: String })
  description: string;
}
