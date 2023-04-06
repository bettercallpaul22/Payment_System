import { User } from "./../entities/User";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";


const route = express.Router();

route.post("/api/signup", async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, pin, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json("email already taken");
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = User.create({
      firstName,
      lastName,
      email, 
      pin,
      password: hashPassword,
      account_balance: 0,
      account_number: "5643892662",
    });
    await user.save();
    res.status(200).json("registration successful");
  } catch (error) {
    res.status(500).json(error);
  }
});
route.post("/api/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json("invalid email");

    const encryptedPassword = bcrypt.compareSync(password, user.password);
    if (!encryptedPassword) {
      return res.status(400).json("invalid password");
    } else {
      

   
      // return res.status(200).json({ msg: "login success", user });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default route;
