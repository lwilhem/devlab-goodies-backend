import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users_entity' })
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id?: number;

  @Column({ name: 'user_email', nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, name: 'username' })
  name: string;

  @Column()
  role: string; // CHANHGE TO ENUM

  @Column({ nullable: false, name: 'user_password' })
  @Exclude()
  password: string;
}
