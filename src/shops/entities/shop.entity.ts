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

  @Column({ unique: true, name: 'shop_name', nullable: false })
  name: string;

  @Column({ name: 'shop_desc', nullable: false })
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAtd?: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;

  @OneToMany(() => ProductEntity, (product) => product.shop)
  products?: ProductEntity[];
}
