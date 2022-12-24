import * as yup from "yup";

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("username is required")
        .min(3, "username must be atleast 3 charachters long"),
    email: yup
        .string()
        .email("must be a valid email address")
        .required("email is required"),
    password: yup
        .string()
        .required("password is required")
        .min(6, "password must be atleast 6 charachters please"),
    tos: yup
        .boolean()
        .oneOf([true], "must accept terms and conditions")
})

export default formSchema;