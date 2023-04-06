import { transactionType, transactionStatus } from "./../entities/Transaction";
import express, { Request, Response } from "express";
import { Transaction } from "../entities/Transaction";
import { User } from "../entities/User";

const route = express.Router();

// Deposit Money
route.post(
  "/api/:id/transaction/deposit",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userId = parseInt(id);
      const { amount, type } = req.body;
      const user = await User.findOne({ where: { id: userId } });
      if (user) {
        const newTransaction = Transaction.create({ amount, type, user });
        await newTransaction.save();
        const newBalance = amount + user.account_balance;
        user.account_balance = newBalance;
        newTransaction.status = transactionStatus.success;
        await newTransaction.save();
        await user.save();
        res.send(user);
      } else {
        res.send("user not found");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

//Transfer Money
route.post(
  "/api/:id/transaction/transfer",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userId = parseInt(id);
      const { amount, type } = req.body;
      const user = await User.findOne({ where: { id: userId } });
      if (user) {
        const newTransaction = Transaction.create({ amount, type, user });
        await newTransaction.save();
        const newBalance = user.account_balance - amount;
        user.account_balance = newBalance;
        newTransaction.status = transactionStatus.success;
        await newTransaction.save();
        await user.save();
        const reciever = await User.findOne({
          where: { id: req.body.recieverId },
        });
        const updatedBalance = reciever?.account_balance + amount;
        reciever!.account_balance = updatedBalance;
        await reciever!.save();
        res.status(200).json({
          message: `amount ${amount} has been successfully transfered to ${
            reciever!.firstName
          } ${reciever!.lastName}`,
        });
      } else {
        res.send("user not found");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

export default route;
