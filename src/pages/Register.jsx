import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';

const Register = () => {
const navigate=useNavigate()
const {selectedOption} = useParams();
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    country: '',
    terms: false,
    newsletter: false,
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    country: Yup.string().required('Required'),
    terms: Yup.bool().oneOf([true], 'You must accept the terms'),
  });

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    navigate('/bienvenue')
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white text-black shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center"></h2>
      
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-4">
          
          {/* Firstname & Lastname */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">First Name</label>
              <Field type="text" name="firstname" className="w-full p-2 border rounded" />
              <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium">Last Name</label>
              <Field type="text" name="lastname" className="w-full p-2 border rounded" />
              <ErrorMessage name="lastname" component="div" className="text-red-500 text-sm" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <Field type="email" name="email" className="w-full p-2 border rounded" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <Field type="password" name="password" className="w-full p-2 border rounded" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium">Country</label>
            <Field as="select" name="country" className="w-full p-2 border rounded">
              <option value="">Select country</option>
              <option value="benin">Benin</option>
              <option value="france">France</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </Field>
            <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Checkboxes */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <Field type="checkbox" name="terms" />
              <span>Send me helpful emails to find rewarding work and job leads.</span>
            </label>
            <ErrorMessage name="terms" component="div" className="text-red-500 text-sm" />

            <label className="flex items-center space-x-2">
              <Field type="checkbox"  name="newsletter" />
              <span>Yes, I understand and agree to the Upwork Terms of Service, including the User Agreement and Privacy Policy.</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
          >
            Create My Account
          </button>
        </Form>
      </Formik>

      {/* Already have an account */}
      <div className="text-center mt-4">
        <span className="text-sm">Already have an account? </span>
        <a href="/login" className="text-blue-600 hover:underline">Join as {selectedOption} </a>
      </div>
    </div>
  );
};

export default Register;
