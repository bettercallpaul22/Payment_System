import * as yup from 'yup'

// const passwordRules = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


// login schema
export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").min(3, 'too short').required('email cannot be empty').trim(),
  password: yup
    .string()
    .min(6, 'password must be six characters long')
    .required('password cannot be empty')
    .trim()
    
});


// register schema
export const registerSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your firstName").required().trim(),
  lastName: yup.string().required("Please enter your lastName").trim(),
  email: yup.string().email("Please enter a valid email").required().trim(),
  password: yup
    .string()
    .min(6)
    .required()
    .trim(),
  comfirmPassword: yup
    .string()
    .min(6)
    .oneOf([yup.ref("password")], "Password must match ")
    .required()
    .trim()
    
});
