import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShopEntity } from '../../shops/entities/shop.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  stock: number;

  @CreateDateColumn()
  createdAtd: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => ShopEntity, (shops) => shops.id)
  @JoinColumn()
  seller: ShopEntity;
}
