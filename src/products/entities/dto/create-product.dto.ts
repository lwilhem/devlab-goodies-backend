import { ApiProperty } from '@nestjs/swagger';

export class createProductDto {
  @ApiProperty({ type: String })
  name: string;
  @ApiProperty({ type: String })
  description: string;
  @ApiProperty({ type: Int32Array })
  stock: number;
  @ApiProperty({ type: Float32Array })
  price: number;
  @ApiProperty({ type: Int32Array })
  shopId: number;
}
