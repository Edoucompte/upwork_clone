import Modal from '../components/Modal'
import EducationForm from '../components/EducationForm'
import React, { useState } from 'react'
import BottomNavButtons from '../components/BottomNavButtons'


const EducationPage = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className={`text-black min-h-screen px-10 md:px-30 relative ${showForm ? 'bg-black-10 bg-opacity-10' : 'bg-white'}`}>
      {/* Texte d'intro */}
      <div className="flex flex-col gap-5 py-10 ">
        <p>6/10</p>
        <div className="text-xl md:text-4xl">
          Clients like  to know  what you know. <br /> Add your education here.
        </div>
        <div>
         You don't have to have a degree. Add any relevant education helps make your profile more visible.
        </div>
      </div>

      {/* Bouton Ajouter */}
      <div className='flex w-[80%] h-30 sm:w-60 sm:h-30 md:w-100 md:h-50 bg-gray-200 rounded-lg my-10 py-5 justify-start items-center'
        onClick={() => setShowForm(true)}
      >
        <div>
          <button
            className='text-4xl mb-2 bg-green-500 w-11 h-11 mx-6 text-white border rounded-full'
          >
            +
          </button>
          <h3 className='mx-6 text-xs md:text-lg '>Add your educations </h3>
        </div>
      </div>

      {/* Modal Formulaire */}
      { showForm &&
          <Modal handleCloseModal={() => setShowForm(false)}>
            {/* Formulaire */}
            <EducationForm onClose={() => setShowForm(false)} />
          </Modal>
      }
      {/* {showForm && (
        <div className="fixed inset-0 bg-black-200/50  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-3xl py-4 relative">
            {/* Bouton Fermer 
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-2xl text-gray-700"
            >
              &times;
            </button>

            {/* Formulaire 
            <EducationForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}*/}


            <BottomNavButtons
              primaryLabel=" Ensuite , ajouter des langues"
              primaryRoute="/langue"
              secondaryLabel="Passer pour l'instant"
              secondaryRoute="/langue"
              step={60}
            /> 
      
    </div>
  )
}

export default EducationPage
