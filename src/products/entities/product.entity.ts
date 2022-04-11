import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ShopEntity } from '../../shops/entities/shop.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @ManyToOne(() => ShopEntity, (shop) => shop.id)
  seller: ShopEntity;
}
