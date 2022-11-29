import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';

//enums
import { SERVICE_URL_LIST } from '../utills/enums';

const LoginForm = ({ errors, status, touched }) => {

   return (
        <Form>
            <div className="form-group mt-3">
                <label>Email</label>
                <Field type="email" name="email" className="form-control" placeholder="Email"/>
                <ErrorMessage name="email">{msg => <span className="text-danger">{msg}</span>}</ErrorMessage>
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <Field type="password" name="password" className="form-control" placeholder="Password"/>
                <ErrorMessage name="password">{msg => <span className="text-danger">{msg}</span>}</ErrorMessage>
            </div>
            <button type="button" className="btn btn-black  mt-3" onClick={() => window.location = 'register'} >Register Instead</button>
            <button type="submit" className="btn btn-secondary mt-3">Login</button>
        </Form>
   )
}

export default LoginForm;
