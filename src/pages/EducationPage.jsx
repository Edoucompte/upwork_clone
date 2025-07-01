import EducationForm from '../components/EducationForm'
import React, { useState } from 'react'


const EducationPage = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className={`text-black min-h-screen px-30 relative ${showForm ? 'bg-black-10 bg-opacity-10' : 'bg-white'}`}>
      {/* Texte d'intro */}
      <div className="flex flex-col gap-5 max-w-3/4 py-10 ">
        <p>6/10</p>
        <div className="text-4xl">
          Clients like  to know  what you know - Add your education here.
        </div>
        <div>
         You dont'have  to have a degree.Add any relevant education helps make your profile more visible.
        </div>
      </div>

      {/* Bouton Ajouter */}
      <div className='flex w-100 h-50 bg-gray-200 rounded-lg my-10 py-5 justify-start items-center'>
        <div>
          <button
            onClick={() => setShowForm(true)}
            className='text-4xl mb-2 bg-green-500 w-10 h-10 mx-6 text-white border rounded-full'
          >
            +
          </button>
          <h3 className='mx-6'>Add your educations </h3>
        </div>
      </div>

      {/* Modal Formulaire */}
      {showForm && (
  <div className="fixed inset-0 bg-black-200/50  flex items-center justify-center z-50">
    <div className="bg-white rounded-lg w-full max-w-3xl py-4 relative">
      {/* Bouton Fermer */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-2 right-2 text-2xl text-gray-700"
      >
        &times;
      </button>

      {/* Formulaire */}
      <EducationForm onClose={() => setShowForm(false)} />
    </div>
  </div>
)}

 <div className=" mt-72 ">
        {/* Barre noire */}
        <div className="h-1 bg-black w-full"></div>
        {/* Bouton en bas à droite */}
        <div className="flex justify-end  gap-2 my-4">
          <button type='button' className=" text-green-500 rounded-2xl px-5 py-2 mb-5">
            Passer pour l'instant </button>
          <button type="button" className=" bg-green-500 text-white rounded-2xl px-5 py-2 mb-5">
            Ensuite , ajouter des langues
          </button> 
        </div>
      </div>
    </div>
  )
}

export default EducationPage
