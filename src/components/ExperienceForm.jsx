import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const ExperienceForm = ({ onClose }) => {
  const initialValues = {
  titre: '',
  entreprise: '',
  emplacement: '',
  pays: '',
  travailleActuellement: false,
  moisDebut: '',
  anneeDebut: '',
  moisFin: '',
  anneeFin: '',
  description: '',
}


 
const validationSchema = Yup.object().shape({
  titre: Yup.string().required('Titre requis'),
  entreprise: Yup.string().required('Entreprise requise'),
  emplacement: Yup.string().required('Emplacement requis'),
  pays: Yup.string().required('Pays requis'),
  travailleActuellement: Yup.boolean(),

  moisDebut: Yup.string().required('Mois de début requis'),
  anneeDebut: Yup.string().required('Année de début requise'),

  moisFin: Yup.string().when('travailleActuellement', {
    is: false,
    then: Yup.string().required('Mois de fin requis'),
    otherwise: Yup.string().notRequired(),
  }),

  anneeFin: Yup.string().when('travailleActuellement', {
    is: false,
    then: Yup.string().required('Année de fin requise'),
    otherwise: Yup.string().notRequired(),
  }),

  description: Yup.string().required('Description requise'),
})



 const handleSubmit = async (values) => {
  const dateDebut = `${values.anneeDebut}-${values.moisDebut}`
  const dateFin = values.travailleActuellement ? null : `${values.anneeFin}-${values.moisFin}`

  const experience = {
    titre: values.titre,
    entreprise: values.entreprise,
    emplacement: values.emplacement,
    pays: values.pays,
    travailleActuellement: values.travailleActuellement,
    dateDebut,
    dateFin,
    description: values.description,
    // ajoute ici l'ID du compte ou portfolio concerné :
    compte_id: 1, // par exemple
    // ou portfolio_id: 2
  }

  try {
    const response = await axios.post('http://localhost:3000/experience', experience)
    console.log('Expérience sauvegardée :', response.data)
    onClose()
  } catch (error) {
    console.error('Erreur lors de la sauvegarde :', error.response?.data || error.message)
    alert("Une erreur s'est produite lors de la sauvegarde.")
  }
}

  return (

    <div className="p-8 w-full max-w-3xl mx-auto bg-white rounded max-h-[80vh] overflow-y-auto text-xs sm:text-lg ">
        <div className='flex flex-row justify-between my-4'>
            <h2 className="text-lg sm:text-xl md:text-3xl  text-black font-semibold">Ajouter une expérience professionnelle</h2> 
             <button onClick={onClose} className="text-2xl text-gray-700">&times;</button>
        </div>
        

      <Formik initialValues={initialValues}/*  validationSchema={validationSchema} */ onSubmit={handleSubmit}>
        <Form className="space-y-4">

          {/* Titre */}
          <div>
            <label className="text-black">Titre</label>
            <Field name="titre" className=" text-black border border-gray-400 p-2 rounded w-full" placeholder='Ex: Ingenieur logiciel' />
            <ErrorMessage name="titre" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Entreprise */}
          <div>
            <label className="text-black">Entreprise</label>
            <Field name="entreprise" placeholder='Microsoft' className=" text-black border border-gray-400 p-2 rounded w-full" />
            <ErrorMessage name="entreprise" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Emplacement + Pays */}
          <div className="flex flex-wrap items-end gap-4">
            <div className="w-full sm:w-[calc(50%-10px)]">
              <label className="text-black">Emplacement</label>
              <Field name="emplacement" placeholder='Londres' className=" text-black border border-gray-400 p-2 rounded w-full" />
              <ErrorMessage name="emplacement" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-full sm:w-[calc(50%-10px)]">
              
              <Field as="select" name="pays"  placeholder='Pays'className=" text-black border border-gray-400 p-2 rounded w-full">
                <option value="">Sélectionner</option>
                <option value="Benin">Bénin</option>
                <option value="Togo">Togo</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
              </Field>
              <ErrorMessage name="pays" component="div" className="text-red-500 text-sm" />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <Field type="checkbox" name="travailleActuellement" className="w-4 h-4" />
            <label className="text-black ">Je travaille actuellement dans ce rôle</label>
          </div>

          {/* Dates */}
          <div className="flex flex-wrap justify-around gap-2">
            <div className=" flex w-full sm:w-[45%] justify-between items-end gap-4">
              <div className="w-full sm:w-[calc(50%-10px)]">
                <label className="text-black">Date Debut</label>
                <Field as="select" name="moisDebut" className="border border-gray-400 p-2 text-black rounded w-full">
                  <option value="">Mois</option>
                  <option value="01">Janvier</option>
                  <option value="02">Février</option>
                  <option value="03">Mars</option>
                  <option value="04">Avril</option>
                  <option value="05">Mai</option>
                  <option value="06">Juin</option>
                  <option value="07">Juillet</option>
                  <option value="08">Août</option>
                  <option value="09">Septembre</option>
                  <option value="10">Octobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Décembre</option>
                </Field>
                <ErrorMessage name="moisDebut" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Année */}
              <div className="w-full sm:w-[calc(50%-10px)]">
                
                <Field as="select" name="anneeDebut" className=" text-black border border-gray-400 p-2 rounded w-full">
                <option value="">Annee</option>
                  {[...Array(41)].map((_, i) => {
                    const year = 2025 - i
                    return <option key={year} value={year}>{year}</option>
                  })}
                </Field>
                <ErrorMessage name="anneeDebut" component="div" className="text-red-500 text-sm" />
              </div>
            </div>
    
            <div className=" flex w-full sm:w-[45%] justify-between items-end gap-4">
              <div className="w-full sm:w-[calc(50%-10px)]">
                <label className="text-black">Date Fin</label>
                <Field as="select" name="moisFin" className="border border-gray-400 p-2 text-black rounded w-full">
                  <option value="">Mois</option>
                  <option value="01">Janvier</option>
                  <option value="02">Février</option>
                  <option value="03">Mars</option>
                  <option value="04">Avril</option>
                  <option value="05">Mai</option>
                  <option value="06">Juin</option>
                  <option value="07">Juillet</option>
                  <option value="08">Août</option>
                  <option value="09">Septembre</option>
                  <option value="10">Octobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Décembre</option>
                </Field>
                <ErrorMessage name="moisFin" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Année */}
              <div className="w-full sm:w-[calc(50%-10px)]">
              
                <Field as="select" name="anneeFin" className=" text-black border border-gray-400 p-2 rounded w-full">
                  <option value="">Annee</option>
                  {[...Array(41)].map((_, i) => {
                    const year = 2025 - i
                    return <option key={year} value={year}>{year}</option>
                  })}
                </Field>
                <ErrorMessage name="anneeFin" component="div" className="text-red-500 text-sm" />
              </div>

            </div>
          </div>
          

          {/* Description */}
          <div>
            <label className="text-black">Description</label>
            <Field as="textarea" name="description" rows="4" className="border border-gray-400 p-2 rounded w-full" />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Barre + Boutons */}
          <div className="mt-2">

            <div className="flex justify-end gap-4 mt-4 text-[0.6rem] sm:text-xs md:text-lg ">
              <button type="button" onClick={onClose} className="px-4 py-2 text-black border border-gray-500 rounded">Annuler</button>
              <button type="submit"  className="px-4 py-2 bg-green-600 text-white rounded">Sauvegarder</button>
            </div>
          </div>

        </Form>
      </Formik>
    </div>
  )
}

export default ExperienceForm
