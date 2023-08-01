import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('UserToken')
export class Token {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column({unique:true})
    email:string;

    @Column()
    password:string;
}
