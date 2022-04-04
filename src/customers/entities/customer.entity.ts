import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customer_entity' })
export class Customer {
  @PrimaryGeneratedColumn({ name: 'uuid' })
  id?: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
