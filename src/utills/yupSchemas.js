import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    cPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
});

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});
