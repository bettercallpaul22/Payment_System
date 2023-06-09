import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { gen } from "n-digit-token";
import { User } from "../src/entities/User";
import { loginSchema, registerSchema } from "../src/validator/inputValidator";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signup = async (req: Request, res: Response) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json(error.message);
    const { firstName, lastName, email, bank, pin, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    const account_number: string = gen(10);

    // if (existingUser) return res.status(400).json("email already taken");
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = User.create({
      firstName,
      lastName,
      email,
      bank,
      pin,
      password: hashPassword,
      account_balance: 0,
      account_number,
    });
    await user.save();

    res.status(200).json("registration successful");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json(error.message);
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json("invalid email");
    const encryptedPassword = bcrypt.compareSync(password, user.password);
    if (!encryptedPassword) {
      return res.status(400).json("invalid password");
    } else {
      // return res.status(200).json({
      //   id:user.id,
      //   Name:`${user.firstName} ${user.lastName}`,
      //   Account_Number:user.account_number,
      //   Account_balance:user.account_balance,
      // });
      const acesssToken = jwt.sign(
        {
          id: user.id,
          email: user.email,
          firstName: user.firstName, 
          lastName: user.lastName,
          bank: user.bank,
          account_Number: user.account_number,
          account_balance: user.account_balance,
        },
        "mytoken"
      );
      return res.status(200).json(acesssToken);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
