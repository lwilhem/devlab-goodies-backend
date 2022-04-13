import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShopEntity } from '../../shops/entities/shop.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn({ name: 'product_id_pk' })
  id?: number;

  @Column({ unique: true, nullable: false, name: 'product_name' })
  name: string;

  @Column({ nullable: false, name: 'product_desc' })
  description: string;

  @Column({ nullable: false, name: 'product_price' })
  price: number;

  @Column({ nullable: false, name: 'product_stock' })
  stock: number;

  @CreateDateColumn()
  createdAtd: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => ShopEntity, (shop) => shop.products)
  shop: ShopEntity;
}
