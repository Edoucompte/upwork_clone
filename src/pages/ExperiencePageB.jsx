import React, { useState } from 'react'
import ExperienceForm from '../components/ExperienceForm'
import BottomNavButtons2 from '../components/ButtomNavButtons2'


const ExperiencePageB = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className={`text-black min-h-screen px-30 relative ${showForm ? 'bg-black-10 bg-opacity-10' : 'bg-white'}`}>
      {/* Texte d'intro */}
      <div className="flex flex-col gap-5 py-10 ">
        <p>5/10</p>
        <div className="text-4xl">
          If you have relevant work experience, add it here.
        </div>
        <div>
          Freelancers who add their experience are twice as likely to win work.
          But if you're just starting out, you can still create a great profile.
          Just head on to the next page.
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
          <h3 className='mx-6'>Add your experiences</h3>
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
      <ExperienceForm onClose={() => setShowForm(false)} />
    </div>
  </div>
)}

<BottomNavButtons2
        primaryLabel="Ensuite , ajouter votre formation"
        primaryRoute="/education"
        secondaryLabel="Passer pour l'instant"
        secondaryRoute="/education"
        step={5}
   /> 
 
    </div>
  )
}

export default ExperiencePageB
