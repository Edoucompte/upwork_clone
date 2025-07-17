import BottomNavButtons from '../components/BottomNavButtons'
import React from 'react'

export default function TauxPaiePage() {
  return (
    <main className='text-black min-h-screen bg-white px-5 text-xs sm:text-lg sm:px-10 md:px-30 relative' >
      {/* Texte d'intro */}
      <div className="flex flex-col gap-5 max-w-3/4 py-10 ">
        <p>8/10</p>
        <div className=" text-xl sm:text-2xl md:text-4xl font-semibold">
          Looking good. Next, tell us which languages you speak.
        </div>
        <div>
          Upwork is global, so clients  are often interestend to know what langage you speak. English is a must, but do you speak any other languages.
        </div>
      </div>

       <div className="p-1 text-black">
        <h2 className=" text-lg sm:text-2xl mb-4">Ajouter une langue</h2>

      </div>

     <BottomNavButtons
        primaryLabel=" Ensuite , ajouter votre adresse"
        primaryRoute="/bio"
        secondaryLabel="Passer pour l'instant"
        secondaryRoute="/bio"
        step={80}
    /> 
    </main>
  )
}
