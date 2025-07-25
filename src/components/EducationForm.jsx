import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const EducationForm = ({ onClose }) => {
  const initialValues = {
    ecole: '',
    degre: '',
    domaine: '',
    moisDebut: '',
    anneeDebut: '',
    moisFin: '',
    anneeFin: '',
    description: '',
  }

  const validationSchema = Yup.object({
    ecole: Yup.string().required("Nom de l'école requis"),
    degre: Yup.string().required('Diplôme requis'),
    domaine: Yup.string().required("Domaine d'étude requis"),
    moisDebut: Yup.string().required('Mois de début requis'),
    anneeDebut: Yup.string().required('Année de début requise'),
    moisFin: Yup.string().required('Mois d’obtention requis'),
    anneeFin: Yup.string().required('Année d’obtention requise'),
    description: Yup.string().required('Description requise'),
  })

 const handleSubmit = async (values) => {
  const date_debut = new Date(`${values.anneeDebut}-${values.moisDebut}-01`)
  const date_fin = new Date(`${values.anneeFin}-${values.moisFin}-01`)

  const educationPayload = {
    ecole: values.ecole,
    nom_diplome: values.degre,
    filiere: values.domaine,
    date_debut,
    date_fin,
    description: values.description,
    compte_id: 2, // à récupérer dynamiquement si possible
  }

  try {
    await axios.post('http://localhost:3000/formation/create', educationPayload)
    console.log('Formation enregistrée')
    onClose()
  } catch (error) {
    console.error('Erreur lors de la création de la formation :', error.response?.data || error.message)
  }
}


  return (
    <div className="p-4 sm:px-10 w-full max-w-3xl mx-auto bg-white rounded max-h-[80vh] overflow-y-auto">
      <div className="flex flex-row justify-between my-4">
        <h2 className="text-lg sm:text-xl md:text-3xl text-black font-semibold">Ajouter une formation</h2>
        <button onClick={onClose} className="text-2xl text-gray-700">
          &times;
        </button>
      </div>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-4">
          {/* École */}
          <div>
            <label className="text-black">École</label>
            <Field name="ecole" placeholder="Université de Lomé" className="text-black border border-gray-400 p-2 rounded w-full" />
            <ErrorMessage name="ecole" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Diplôme */}
          <div>
            <label className="text-black">Diplôme</label>
            <Field name="degre" placeholder="Licence en Informatique" className="text-black border border-gray-400 p-2 rounded w-full" />
            <ErrorMessage name="degre" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Domaine */}
          <div>
            <label className="text-black">Domaine d’étude</label>
            <Field name="domaine" placeholder="Développement logiciel" className="text-black border border-gray-400 p-2 rounded w-full" />
            <ErrorMessage name="domaine" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Dates */}
          <div className="flex flex-wrap justify-between gap-4">
            {/* Début */}
            <div className="w-full sm:w-[calc(45%)]">
              <label className="text-black">Date de début</label>
              <div className="flex gap-2">
                <Field as="select" name="moisDebut" className="border border-gray-400 p-2 text-black rounded w-1/2">
                  <option value="">Mois</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={`${(i + 1).toString().padStart(2, '0')}`}>
                      {new Date(0, i).toLocaleString('fr', { month: 'long' })}
                    </option>
                  ))}
                </Field>
                <Field as="select" name="anneeDebut" className="border border-gray-400 p-2 text-black rounded w-1/2">
                  <option value="">Année</option>
                  {Array.from({ length: 41 }, (_, i) => {
                    const year = 2025 - i
                    return <option key={year} value={year}>{year}</option>
                  })}
                </Field>
              </div>
              <ErrorMessage name="moisDebut" component="div" className="text-red-500 text-sm" />
              <ErrorMessage name="anneeDebut" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Fin */}
            <div className="w-full sm:w-[calc(45%)]">
              <label className="text-black">Date d’obtention</label>
              <div className="flex gap-2">
                <Field as="select" name="moisFin" className="border border-gray-400 p-2 text-black rounded w-1/2">
                  <option value="">Mois</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={`${(i + 1).toString().padStart(2, '0')}`}>
                      {new Date(0, i).toLocaleString('fr', { month: 'long' })}
                    </option>
                  ))}
                </Field>
                <Field as="select" name="anneeFin" className="border border-gray-400 p-2 text-black rounded w-1/2">
                  <option value="">Année</option>
                  {Array.from({ length: 41 }, (_, i) => {
                    const year = 2025 - i
                    return <option key={year} value={year}>{year}</option>
                  })}
                </Field>
              </div>
              <ErrorMessage name="moisFin" component="div" className="text-red-500 text-sm" />
              <ErrorMessage name="anneeFin" component="div" className="text-red-500 text-sm" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-black">Description</label>
            <Field as="textarea" name="description" rows="4" className="border border-gray-400 p-2 rounded w-full" />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Boutons */}
          <div className="flex justify-end gap-4 mt-4 text-xs sm:text-lg">
            <button type="button" onClick={onClose} className="px-4 py-2 text-black border border-gray-500 rounded">Annuler</button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Sauvegarder</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default EducationForm
