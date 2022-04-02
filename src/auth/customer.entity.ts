import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerEntity {
  @PrimaryGeneratedColumn({ name: 'customer_id_pk' })
  id?: number;

  @Column({ name: 'customer_name' })
  name: string;

  @Column({ name: 'customer_email' })
  email: string;

  @Column({ name: 'customer_password' })
  password: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
