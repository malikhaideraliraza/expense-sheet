import React from 'react';
import useAxios from 'axios-hooks'
import { Formik } from 'formik';

//components
import SignupForm from '../../components/SignupForm';

//services
import { register } from '../../services/appService';

//utills
import { signUpInitValues } from '../../utills/formInitValues';
import { signUpValidationSchema } from '../../utills/yupSchemas';

//helpers
import { notify } from '../../utills/helpers';

const Signup = () => {

   const [{ loading }, execute] = useAxios();

   const handleSubmit = async (values) => {
      try {
         delete values.cPassword;
         const { data } = await execute(register(values));
         console.log(data);
         if (data?.success === true) {
            notify('success', data?.message, () => {
               window.location = '/';
            });
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
               <h1>Signup</h1>
               <Formik
                  initialValues={signUpInitValues}
                  validationSchema={signUpValidationSchema}
                  onSubmit={handleSubmit}
                  render={(formProps) => (
                     <SignupForm {...formProps} loading={loading} />
                  )}
               />
            </div>
         </div>
      </div>
   )
}

export default Signup;
