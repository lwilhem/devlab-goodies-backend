import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customers_entity' })
export class CustomerEntity {
  @PrimaryGeneratedColumn({ name: 'customer_id_pk' })
  id: number;

  @Column({ nullable: false, name: 'customer_name' })
  name: string;

  @Column({ nullable: false, name: 'customer_password' })
  password: string;

  @Column({ unique: true, name: 'customer_email', nullable: false })
  email: string;
}
