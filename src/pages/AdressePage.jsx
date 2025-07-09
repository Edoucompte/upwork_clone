import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import BottomNavButtons2 from '../components/ButtomNavButtons2'

const AdressePage = () => {

     const initialValues = {
    dateOfBirth: '',
    country: '',
    streetAddress: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  }

  const validationSchema = Yup.object({
    dateOfBirth: Yup.string().required('Date de naissance requise'),
    country: Yup.string().required('Pays requis'),
    streetAddress: Yup.string().required('Adresse requise'),
    city: Yup.string().required('Ville requise'),
    state: Yup.string().required('Province requise'),
    zip: Yup.string().required('Code postal requis'),
    phone: Yup.string().required('Numéro de téléphone requis'),
  })

  const handleSubmit = (values) => {
    console.log('Données envoyées :', values)
  }
  return (
    <  div className='px-30 bg-white text-black '>
      <div className='py-6'></div>
      <div className='my-10'>
      <p>10/10</p>
    <h1 className='text-4xl w-2/3 my-4 '> A few last details , then you can check and publish your profile </h1>
    <h3 className=' w-5/6 my-4 '>A professional photo helps your builds trust with your client. To keep things safe and simple  ,they 'll pay you through us -which is why we need your personal information. </h3>
      </div>

    <div className=' flex row mt-5  h-full gap-x-10'>
       <div className="col-md-3  flex flex-col items-start justify-start gap-4  rounded-md">

  {/* Cercle pour la photo */}
    <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white overflow-hidden">
    {/* Si photo présente, ici */}
    {/* <img src="URL_PHOTO" alt="profil" className="w-full h-full object-cover" /> */}

    {/* Sinon + */}
    <span className="text-4xl text-gray-400 font-bold">+</span>
  </div>

  {/* Bouton upload */}
  <button className="flex items-center gap-2  border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-50">
    <span className="text-xl font-bold">+</span> Upload photo
  </button>

        </div>

        <div className='col-md-9 '>
             <div className="p-4h-auto">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-4" id="adresse-form">

          {/* Date of Birth */}
          <div>
            <label className="text-black block">Date of Birth</label>
            <Field type="date" name="dateOfBirth" className="border border-gray-400 p-2 rounded w-1/3 placeholder-gray-500" />
            <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Country */}
          <div>
            <label className="text-black block">Country</label>
            <Field as="select" name="country" className="border border-gray-400 p-2 rounded w-1/2 text-black">
              <option value="">Select a country</option>
              <option value="Benin">Benin</option>
              <option value="Senegal">Senegal</option>
              <option value="Togo">Togo</option>
            </Field>
            <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Street Address + Apt */}
          <div className="flex gap-4">
            <div className="w-2/3">
              <label className="text-black">Street Address</label>
              <Field name="streetAddress" placeholder="Ex: 12 rue des écoles" className="border border-gray-400 p-2 rounded w-full placeholder-gray-500" />
              <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-1/3">
              <label className="text-black">Apt/Suite</label>
              <Field name="apt" placeholder="Ex: 2B" className="border border-gray-400 p-2 rounded w-full placeholder-gray-500" />
            </div>
          </div>

          {/* City + State + Zip */}
          <div className="flex gap-4">
            <div className="w-1/3">
              <label className="text-black">City</label>
              <Field name="city" className="border border-gray-400 p-2 rounded w-full placeholder-gray-500" />
              <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-1/3">
              <label className="text-black">State/Province</label>
              <Field name="state" className="border border-gray-400 p-2 rounded w-full placeholder-gray-500" />
              <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-1/3">
              <label className="text-black">Zip/Postal Code</label>
              <Field name="zip" className="border border-gray-400 p-2 rounded w-full placeholder-gray-500" />
              <ErrorMessage name="zip" component="div" className="text-red-500 text-sm" />
            </div>
          </div>

        
  {/* Phone */}
          <div>
            <label className="text-black block">Phone</label>
                  <Field name="phone">
          {({ field, form }) => (
            <div>
             <PhoneInput
              country={'bj'}
              value={field.value}
              onChange={phone => form.setFieldValue('phone', phone)}
             
            />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>
          )}
        </Field>
          </div>
        
        </Form>
      </Formik>
    </div>
        </div>
        
    
    </div>
      {/* Submit */}
         

         <BottomNavButtons2
        primaryLabel="Vérifier et publier mon profil"
        primaryRoute="/adresse"
        step={10}
   /> 
        

    </div>
  )
}

export default AdressePage