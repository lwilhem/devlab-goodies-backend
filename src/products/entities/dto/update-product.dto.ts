import { ApiPropertyOptional } from '@nestjs/swagger';

export class updateProductDto {
  @ApiPropertyOptional({ type: String })
  name?: string;
  @ApiPropertyOptional({ type: String })
  description?: string;
  @ApiPropertyOptional({ type: Int32Array })
  stock?: number;
  @ApiPropertyOptional({ type: Float32Array })
  price?: number;
}
