import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customer_entity' })
export class CustomerEntity {
  @PrimaryGeneratedColumn({ name: 'uuid' })
  id?: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;
}
