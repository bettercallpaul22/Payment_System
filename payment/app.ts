import express, {Express} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { AppDataSource } from './src/database/DataSource'
import userRoute from './src/routes/UserRoutes'
import transactionRoute from './src/routes/transactionRoute'

dotenv.config()

const app:Express = express()
const PORT = process.env.PORT || 4000
app.use(bodyParser.json())
app.use(cors())

 app.listen(PORT, ()=>{  
    console.log(`server running on port ${PORT}`)
 })
 app.use(userRoute)
 app.use(transactionRoute)
AppDataSource.initialize()
.then(()=> console.log('App is connected to postgres database'))
.catch((err)=> console.log({msg:err}))

