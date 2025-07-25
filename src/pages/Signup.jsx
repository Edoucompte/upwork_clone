import { httpAxiosClient } from '../clients/httpClient';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import * as Yup from 'yup'

export default function Signup() {
  // choix selectionne
  const {selectedOption}= useParams();
  let navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
 


 
  //funtion pour soumettre
 const handleSubmit = async (values, { setSubmitting, setErrors }) => {
  if(! ['freelancer', 'client'].includes(selectedOption)){
    navigate('register');
  }
  else {
    try {
      const response = await httpAxiosClient.post('auth/register', {
        nom: values.nom,
        prenom: values.prenom,
        email: values.email,
        password: values.password,
        pays: values.pays,
        role: selectedOption,
      });
  
      console.log("Inscription réussie :", response.data);
      navigate('/register/bienvenue');
  
    } catch (error) {
      console.error("Erreur d'inscription :", error.response?.data?.message || error.message);
      setErrors({
        email: error.response?.data?.message || "Une erreur est survenue lors de l'inscription"
      });
    } finally {
      setSubmitting(false);
    }
  }
};

  // ✅ Initial values
const initialValues = {
  nom: '',
  prenom: '',
  email: '',
  password: '',
  pays: '',
  terms: false,
  newsletter: false
};

   // ✅ Validation schema
  const validationSchema = Yup.object({
  nom: Yup.string().required('Champ requis'),
  prenom: Yup.string().required('Champ requis'),
  email: Yup.string().email('Email invalide').required('Champ requis'),
  password: Yup.string().min(6, 'Minimum 6 caractères').required('Champ requis'),
  pays: Yup.string().required('Champ requis'),
  terms: Yup.bool().oneOf([true], 'Vous devez accepter les conditions'),
});

  
  return (
    <main className='min-h-screen pt-16 pb-6 px-10 flex bg-white text-black justify-center'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="space-y-4 max-w-[800px] ">

            {/* Nom et prenom */}
            <div className="flex flex-wrap justify-between gap-4">
              <div className='w-full sm:w-[47%]'>
                  <label className="text-black">Nom</label>
                  <Field name="nom" 
                    className=" text-black border border-gray-400 p-2 rounded w-full"/>
                  <ErrorMessage name="nom" component="div" className="text-red-500 text-sm" />
              </div>

              <div className='w-full sm:w-[47%]'>
                  <label className="text-black">Prénom</label>
                  <Field name="prenom" 
                    className=" text-black border border-gray-400 p-2 rounded w-full"/>
                  <ErrorMessage name="prenom" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-black">Email</label>
              <Field name="email" className=" text-black border border-gray-400 p-2 rounded w-full" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Password */}
            <div className="w-full relative">
              <label className="text-black">Mot de passe </label>
              <Field name="password" type={showPassword? "text": "password"}
                placeholder="Entrez votre mot de passe"
                className=" text-black border border-gray-400 p-2 rounded w-full" />
                <button type='button' onClick={()=>{setShowPassword(!showPassword)}}
                  className='absolute top-8 right-3'
                  >
                  {showPassword? "montrer": "cacher"}
                </button>
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Pays */}
            <div className="w-full ">
                <label className="text-black">Pays</label>
                <Field as="select" name="pays"  placeholder='Pays'className=" text-black border border-gray-400 p-2 rounded w-full">
                  <option value="">Sélectionner</option>
                  <option value="Benin">Bénin</option>
                  <option value="Togo">Togo</option>
                  <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                </Field>
                <ErrorMessage name="pays" component="div" className="text-red-500 text-sm" />
            </div>
              
              

            {/* Checkboxs */}
            <div className="flex items-center gap-2">
              <Field type="checkbox" name="newsletter" className="w-5 h-5 checkbox checkbox-success" />
              <label className="text-black ">
                M'envoyer des mails utils for trouver des travaux rémunérés et des fils d'emplois
              </label>
            </div>

            <div className="flex items-center gap-2">
              <Field type="checkbox" name="terms" className="w-5 h-5 checkbox checkbox-success" />
              <label className="text-black ">
                Oui. Je comprends et accepte les <span className='underline text-green-600'>Termes de Service</span>, 
                ainsi que les <span className="underline text-green-600">Agrément Utilisateur</span> et 
                <span className="underline text-green-600">Politique Privée</span>
              </label>
            </div>

            <div className="flex my-8">
              <button 
                type="submit"  
                className="px-4 py-2 bg-green-700 inline-block text-white rounded w-[300px] m-auto">
                  Creer mon compte
              </button>
            </div>

            <div className="flex">
              <p className="m-auto">
              Vous souhaitez embauché des talents?
              <span className="text-green-700 mx-4">S'inscrire en tant que {selectedOption}</span>
              </p>
            </div>

          </Form>
      </Formik>
    </main>
  )
}
