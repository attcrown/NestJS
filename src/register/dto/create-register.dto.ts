import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateRegisterDto {
    @PrimaryGeneratedColumn()
    id:number;
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
    @Column()
    isActive: boolean;
}
