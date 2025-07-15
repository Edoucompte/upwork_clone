import React from 'react'

export default function LinkedInCvImport() {
  return (
    <div className='m-3 sm:m-3 text-xs'>
      <h1 className='text-lg sm:text-xl md:text-2xl font-medium mb-4'>Télécharger votre profil LinkedIn</h1>
      <p className='mb-1 sm:mb-3'>
        Etape 1 : si ce n'est pas déjà fait, enregistrez votre profil LinkedIn 
        au format PDF. Voici comment procéder :
      </p>

      {/* Photo Demo Import */}
      <div className='w-[80%] sm:w-70 h-40 bg-gray-400'>

      </div>

      <p className='my-1 sm:my-3'>
        Etape 2 : revenez ici pour le télécharger.
      </p>

      <div className="border-2 border-green-700 text-green-700 inline-block py-2 px-5 rounded-lg"
        onClick={() => {}}
      >
        <p className="mx-auto"> 
          <span>Télécharger votre PDF LinkedIn enregistré</span>
        </p>
      </div>
    </div>
  )
}