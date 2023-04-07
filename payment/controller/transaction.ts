import express, { Request, Response } from "express";
import { User } from "../src/entities/User";
import { Transaction, transactionStatus } from "../src/entities/Transaction";

const route = express.Router();

// Deposit Money
export const deposit = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);
    const { amount, type } = req.body;
    const user = await User.findOne({ where: { id: userId } });
    if (user) {
      const transaction = Transaction.create({ amount, type, user });
      await transaction.save();
      user.account_balance = amount + user.account_balance;
      transaction.status = transactionStatus.success;
      await transaction.save();
      await user.save();
      res.send(user);
    } else {
      res.send("user not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Transfer Money
export const transfer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);
    const { amount, type } = req.body;
    const user = await User.findOne({ where: { id: userId } });
    if (user) {
      const transaction = Transaction.create({ amount, type, user });
      await transaction.save();

      user.account_balance = user.account_balance - amount;
      transaction.status = transactionStatus.success;
      await transaction.save();
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
};

// get user transactions
export const user_transactions = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user_id = parseInt(id);
    const user = await User.findOne({
      where: { id: user_id },
      relations: ["transaction"],
    });
    if (user) {
      res.status(200).json(user.transaction);
    } else {
      res.status(400).json("user not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
