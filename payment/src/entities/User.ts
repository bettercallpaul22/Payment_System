import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, PrimaryColumn } from "typeorm"
import { Transaction } from "./Transaction"
import {gen} from 'n-digit-token'



@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string
    
    @Column()
    lastName: string
    
    @Column()
    email: string

    @Column()
    pin: number
    
    @Column()
    password: string
    
    @Column()
    account_balance: number

    @Column() 
    account_number: string




    @OneToMany(
        ()=>Transaction,
        transaction => transaction.user 
    )
    transaction: Transaction[]

}