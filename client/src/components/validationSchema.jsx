import * as yup from 'yup'

const passwordRules = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signupSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your firstName").required(),
  lastName: yup.string().required("Please enter your lastName"),
  email: yup.string().email("Please enter a valid email").required(),
  password: yup
    .string()
    .min(6)
    .required(),
  comfirmPassword: yup
    .string()
    .min(6)
    .oneOf([yup.ref("password")], "Password must match ")
    .required(),
});
