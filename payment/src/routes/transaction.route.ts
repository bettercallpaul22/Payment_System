
import express, { Request, Response } from "express";
import { deposit, transfer, user_transactions } from "../../controller/transaction";
const route = express.Router();

route.post('/:id/deposit', deposit)
route.post('/:id/transfer', transfer)


// get user transactions
route.get('/:id/transaction', user_transactions)

export default route