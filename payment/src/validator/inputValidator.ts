import joi from "joi";

export const registerSchema = joi.object({
  firstName: joi.string().alphanum().min(3).max(30).required().trim(true),
  lastName: joi.string().alphanum().min(3).max(30).required().trim(true),
  email: joi.string().min(3).max(30).required().trim(true).email(),
  bank: joi.string().required(),
  pin: joi.number().min(4).required(),
  password: joi.string().min(3).max(30).required().trim()
});
export const loginSchema = joi.object({
  email: joi.string().min(3).max(30).required().trim(true).email(),
  password: joi.string().min(3).max(30).required().trim()
});
