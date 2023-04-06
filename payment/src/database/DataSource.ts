import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import { Transaction } from '../entities/Transaction'
import { User } from '../entities/User'

dotenv.config()

export const AppDataSource = new DataSource({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'admin',
    database:'react_native_payment', 
    logging:false,
    synchronize:true,
    entities:[User, Transaction],


})