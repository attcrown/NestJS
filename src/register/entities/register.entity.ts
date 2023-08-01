import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("detail_user")
export class Register {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    location: string;
  
    @Column({ default: true })
    isActive: boolean;
}

