import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShopEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  picture: string;
}
