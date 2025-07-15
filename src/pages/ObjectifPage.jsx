import React from 'react'
import certif from '../assets/medaille.jpg'
import bourse from '../assets/bourse.jpg'
import finance from '../assets/finance.jpg'
import choix from '../assets/choix.jpg'
import BottomNavButtons from '../components/BottomNavButtons'

const ObjectifPage = () => {
  return (
      <div className='py-10 px-10 sm:px-30 bg-white min-h-screen text-black'>
         <p>2/3</p>
            <h1 className='text-4xl my-3'>Compris. Quel est votre objectif principal en tant freeleancer ?</h1>
    <p className='my-8'>Chacun choisit Upwork pour des raison différentes.
        Nous souhaitons mettre en avant les opportunités qui correspondent le mieux à vos objectifs, tout en vous presentant toutes les possibilités.
    </p>
    

    <div className='flex gap-4'>

  <div className='w-1/4 h-72  rounded-lg overflow-hidden flex flex-col justify-between'>
    
    {/* Image en fond */}
    <div 
      className="h-50 bg-cover bg-center "
      style={{ backgroundImage: `url(${bourse})` }}
    >
    </div>

    {/* Titre en bas */}
    <div className="p-2 mx-auto  text-black font-semibold text-xs md:text-lg">
      Pour gagner mon revenu principal
    </div>



  </div>

<div className='w-1/4 h-72  rounded-lg overflow-hidden '>
    
    {/* Image en fond */}
    <div 
      className="h-50 bg-cover bg-center "
      style={{ backgroundImage: `url(${finance})` }}
    >
    </div>

    {/* Titre en bas */}
    <div className="p-2 mx-auto  text-black font-semibold text-xs md:text-lg">
      Pour gagner de l'argent à côté
    </div>



  </div>


  <div className='w-1/4 h-72  rounded-lg overflow-hidden flex flex-col justify-between'>
    
    {/* Image en fond */}
    <div 
      className="h-60 bg-cover bg-center "
      style={{ backgroundImage: `url(${certif})` }}
    >
    </div>

    {/* Titre en bas */}
    <div className="p-2 mx-auto text-black font-semibold text-xs md:text-lg">
      Pour acquerir de l'experience pour un emploi en plein temps
    </div>



  </div>

  <div className='w-1/4 h-72  rounded-lg overflow-hidden flex flex-col justify-between'>
    
    {/* Image en fond */}
    <div 
      className="h-60 bg-cover bg-center "
      style={{ backgroundImage: `url(${choix})` }}
    >
    </div>

    {/* Titre en bas */}
    <div className="p-2 mx-auto text-black font-semibold text-xs md:text-lg">
      Je n'ai pas encore d'objectif en tete 
    </div>



  </div>


</div>


<BottomNavButtons
        primaryLabel="Suivant"
        primaryRoute="/type-travail"
        secondaryLabel="Passer pour l'instant"
        secondaryRoute="/type-travail"
        step={66}
   /> 
   
            
        
           
    </div>
  )
}

export default ObjectifPage