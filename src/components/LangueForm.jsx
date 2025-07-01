import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LanguageForm = ({ onAdd }) => {
  const initialValues = {
    langue: '',
    proficiency: '',
  }

  const validationSchema = Yup.object({
    langue: Yup.string().required('Langue requise'),
    proficiency: Yup.string().required('Niveau requis'),
  })

  const handleSubmit = (values, { resetForm }) => {
    onAdd(values)
    console.log('Langue ajoutée :', values)
    resetForm()
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="flex gap-4 items-center">
        <div className="flex  w-1/3 flex-col">
            <Field
            as="select"
            name="langue"
            className="border border-gray-400 p-2 rounded text-black"
            >
            <option value="">Choisir une langue</option>
            <option value="Français">Français</option>
            <option value="Anglais">Anglais</option>
            <option value="Espagnol">Espagnol</option>
            <option value="Allemand">Allemand</option>
            <option value="Arabe">Arabe</option>
            </Field>
          <ErrorMessage name="langue" component="div" className="text-red-500 text-sm" />
        </div>

        <div className="flex  w-1/3 flex-col">
          <Field
            as="select"
            name="proficiency"
            className="border border-gray-400 p-2 rounded text-black"
          >
            <option value="">Niveau</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
            <option value="Bilingue/Fluent">Bilingue / Fluent</option>
          </Field>
          <ErrorMessage name="proficiency" component="div" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="  text-2xl px-4 py-2 bg-green-600 text-white rounded">+</button>
      </Form>
    </Formik>
  )
}

export default LanguageForm
