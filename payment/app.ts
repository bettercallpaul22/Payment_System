import express, {Express} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { AppDataSource } from './src/database/DataSource'
import loginRoute from './src/routes/user.route'
import signupRoute from './src/routes/user.route'
import transactions from './src/routes/transaction.route' 

dotenv.config()

const app:Express = express()
const PORT = process.env.PORT || 4000
app.use(bodyParser.json())
app.use(cors())

 app.listen(PORT, ()=>{  
    console.log(`server running on port ${PORT}`)
 })
 AppDataSource.initialize()
 .then(()=> console.log('App is connected to postgres database'))
 .catch((err)=> console.log({msg:err}))
 

 // User auth
 app.use('/api', loginRoute)
 app.use('/api', signupRoute)

 // Transactions
 app.use('/api', transactions)


