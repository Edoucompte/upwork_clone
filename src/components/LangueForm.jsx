import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const LanguageForm = ({ onAdd }) => {
  const initialValues = {
    langue: '',
    proficiency: '',
  }

  const validationSchema = Yup.object({
    langue: Yup.string().required('Langue requise'),
    proficiency: Yup.string().required('Niveau requis'),
  })

 const handleSubmit = async (values, { resetForm }) => {
  const languePayload = {
    nom: values.langue,
    niveau: values.proficiency,
    compte_id: 2, // remplace par la vraie valeur
  }

  try {
  await axios.post('http://localhost:3000/langue/create', languePayload)
  console.log('Langue enregistrée :', languePayload)
  onAdd(languePayload)
  resetForm()
} catch (error) {
  if (error.response) {
    const status = error.response.status
    const data = error.response.data

    switch (status) {
      case 400:
        console.error("Erreur 400 (Bad Request) :", data.message || data)
        alert(`Erreur : ${data.message || 'Requête invalide'}`)
        break
      case 404:
        console.error("Erreur 404 (Not Found) :", data.message || data)
        alert(`Erreur : ${data.message || 'Ressource introuvable'}`)
        break
      case 409:
        console.error("Erreur 409 (Conflit) :", data.message || data)
        alert(`Erreur : ${data.message || 'Conflit détecté'}`)
        break
      case 500:
        console.error("Erreur 500 (Server Error) :", data.message || data)
        alert(`Erreur serveur, veuillez réessayer plus tard.`)
        break
      default:
        console.error(`Erreur ${status} :`, data.message || data)
        alert(`Erreur inattendue : ${data.message || 'Veuillez réessayer'}`)
    }
  } else if (error.request) {
    console.error("Pas de réponse du serveur :", error.message)
    alert("Impossible de contacter le serveur, vérifiez votre connexion.")
  } else {
    console.error("Erreur Axios :", error.message)
    alert("Erreur lors de la requête : " + error.message)
  }
}

}


  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="flex gap-4 items-center text-xs sm:text-lg">
        <div className="flex  w-[40%] flex-col">
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

        <div className="flex  w-[40%] flex-col">
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

        <button type="submit" className="  text-2xl px-3 py-1 bg-green-600 text-white rounded">+</button>
      </Form>
    </Formik>
  )
}

export default LanguageForm
