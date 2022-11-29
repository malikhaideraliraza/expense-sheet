import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';

//enums
import { SERVICE_URL_LIST } from '../utills/enums';

const SignupForm = ({ errors, status, touched, loading }) => {

   return (

        <Form>
            <div className="form-group mt-3">
                <label>Name</label>
                <Field type="text" name="name" className="form-control" placeholder="Name"/>
                <ErrorMessage name="name">{msg => <span className="text-danger">{msg}</span>}</ErrorMessage>
            </div>
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
            <div className="form-group mt-3">
                <label>Confirm Password</label>
                <Field type="password" name="cPassword" className="form-control" placeholder="Confirm Password"/>
                <ErrorMessage name="cPassword">{msg => <span className="text-danger">{msg}</span>}</ErrorMessage>
            </div>
            <button type="button" className="btn btn-black  mt-3" onClick={() => window.location = '/'} >Login Instead</button>
            <button type="submit" className="btn btn-secondary mt-3 flex">
                { loading &&
                    <div class="spinner-border spinner-border-sm" role="status">
                        <span class="sr-only"></span>
                    </div>
                }
                Register
            </button>
        </Form>
   )
}

export default SignupForm;
