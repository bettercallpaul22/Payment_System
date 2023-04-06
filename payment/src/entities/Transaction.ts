import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

export enum transactionType {
deposit = 'deposit',
withdraw = 'withdraw'
}

export enum transactionStatus {
success = 'success',
failed = 'failed'
}


@Entity()
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    amount: number

    @Column({nullable:true})
    status: string

    // @Column({type:'enum', enum:transactionType})
    @Column()
    type: string

    @ManyToOne(
        ()=>User,
        user => user.transaction
    )
    @JoinColumn({
        name:'user_id'
    })
    user:User

}