import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from '../../products/entities/product.entity';

@Entity()
export class ShopEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name: string;

  @Column()
  desc: string;

  @CreateDateColumn()
  createdAtd: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(() => ProductEntity, (products) => products.id)
  @JoinColumn()
  products: ProductEntity[];
}
