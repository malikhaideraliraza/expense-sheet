import React from 'react';
import useAxios from 'axios-hooks'
import { Formik } from 'formik';

//components
import LoginForm from '../../components/LoginForm';

//services
import { login } from '../../services/appService';

//utills
import { logInInitValues } from '../../utills/formInitValues';
import { loginValidationSchema } from '../../utills/yupSchemas';

//helpers
import { notify } from '../../utills/helpers';

const Login = (props) => {

   const [{ loading }, execute] = useAxios();

   const handleSubmit = async (values) => {
      try {
         const { data } = await execute(login(values));
         console.log(data);
         if (data?.success === true) {
            localStorage.setItem('user', JSON.stringify({
               token: data.user.token,
               email: data.user.email,
               name: data.user.name,
            }))
            window.location = '/dashboard';
         }
         
      } catch (err) {
         notify('error', err?.response?.data?.message || err.message);
         console.log(err?.response?.data?.message || err.message);
      }
   }
   return (
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <h1>Login</h1>
               <Formik
                  initialValues={logInInitValues}
                  validationSchema={loginValidationSchema}
                  onSubmit={handleSubmit}
                  render={(formProps) => (
                     <LoginForm {...formProps} />
                  )}
               />
            </div>
         </div>
      </div>
   )
}

export default Login;
