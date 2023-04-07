import { User } from "../entities/User";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { gen } from "n-digit-token";
import { login, signup } from "../../controller/user.auth";

const route = express.Router();

// signup
route.post('/signup', signup)

// login
route.post('/login', login)







export default route;
