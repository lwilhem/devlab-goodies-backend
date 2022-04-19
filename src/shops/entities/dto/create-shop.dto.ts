import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class createShopDto {
  @ApiPropertyOptional({ type: Int32Array })
  id?: number;
  @ApiProperty({ type: String })
  name: string;
  @ApiPropertyOptional({ type: String })
  description: string;
  @ApiPropertyOptional({ type: Int32Array })
  retainerId: number;
}
