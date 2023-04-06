import { transactionType, transactionStatus } from "./../entities/Transaction";
import express, { Request, Response } from "express";
import { Transaction } from "../entities/Transaction";
import { User } from "../entities/User";

const route = express.Router();

route.post("/api/:id/transaction", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);
    const { amount, type } = req.body;
    const user = await User.findOne({ where: { id: userId } });
    if (user) {
      const newTransaction = Transaction.create({ amount, type, user });
      await newTransaction.save();
      if (type === transactionType.deposit) {
        const newBalance = amount + user.account_balance;
        user.account_balance = newBalance;
        newTransaction.status = transactionStatus.success;
        await newTransaction.save();
        await user.save();
        res.send(user);
      } else if (type === transactionType.withdraw) {
        if(req.body.pin !== user.pin) return res.status(400).json("incorrect pin")
        if(user.account_balance < amount) return res.status(400).json("insuficient fund")
        user.account_balance = user.account_balance - amount;
        await user.save();
        res.status(200).json(`${amount} withrawal successful`);
      }
    } else {
      res.send("user not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default route;
