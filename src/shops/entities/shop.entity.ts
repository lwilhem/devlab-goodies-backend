import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from '../../products/entities/product.entity';

@Entity()
export class ShopEntity {
  @PrimaryGeneratedColumn({ name: 'shop_id_pk' })
  id?: number;

  @Column({ unique: true, name: 'shop_name' })
  name: string;

  @Column({ name: 'shop_desc' })
  desc: string;

  @CreateDateColumn()
  createdAtd?: string;

  @UpdateDateColumn()
  updatedAt?: string;

  @OneToMany(() => ProductEntity, (product) => product.shop)
  products?: ProductEntity[];
}
