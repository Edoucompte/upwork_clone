import React, { useState } from 'react'
import certif from '../assets/medaille.jpg'
import bourse from '../assets/bourse.jpg'
import finance from '../assets/finance.jpg'
import choix from '../assets/choix.jpg'
import BottomNavButtons2 from '../components/ButtomNavButtons2'

const ObjectifPage = () => {
  const [objectif, setObjectif] = useState('')  
  const handleType = (e) => {
    setObjectif(e)
    //console.log('Type de freelancer sélectionné:', objectif)
  }
  return (
      <div className='py-10 px-4 sm:px-10 lg:px-30 bg-white min-h-screen text-black'>
         <p className='text-xs md:text-lg'>2/3</p>
        <h1 className=' text-xl md:text-4xl my-3'>Compris. Quel est votre objectif principal en tant freeleancer ?</h1>
        <p className='text-xs md:text-lg my-8'>Chacun choisit Upwork pour des raison différentes.
            Nous souhaitons mettre en avant les opportunités qui correspondent le mieux à vos objectifs, tout en vous presentant toutes les possibilités.
        </p>
    

    <div className='flex flex-wrap justify-around gap-3 text-xs md:text-lg '>

      <label htmlFor='revenu_principal' 
        className='w-[calc(50%-20px)] sm:w-1/5 h-40 md:h-50 lg:h-70 shadow-xs shadow-gray-200 rounded-lg overflow-hidden flex flex-col justify-between relative'>
        
        <input id='revenu_principal' type="radio" name="type-travail"
                className="radio radio-success w-4 h-4 p-0 absolute top-1 right-2" value='revenu_principal'
                checked={objectif === 'revenu_principal' }
                onChange={ (e) => handleType(e.target.value)} />
        
        {/* Image en fond */}
        <div 
          className="h-[60%] bg-cover bg-center "
          style={{ backgroundImage: `url(${bourse})` }}
        >
        </div>

        {/* Titre en bas */}
        <div className="p-2 sm:p-4 mx-auto  text-black">
          Pour gagner mon revenu principal
        </div>



      </label>

      <label htmlFor='revenu_second' 
        className='w-[calc(50%-20px)] sm:w-1/5 shadow-xs shadow-gray-200 rounded-lg overflow-hidden flex flex-col justify-between relative'>
        
        {/* Bouton radio */}
        <input id='revenu_second' type="radio" name="type-travail"
          className="radio radio-success w-4 h-4 p-0 absolute top-1 right-2" value='revenu_second'
          checked={objectif === 'revenu_second' }
          onChange={ (e) => handleType(e.target.value)} />

        {/* Image en fond */}
        <div 
          className="h-[60%] bg-cover bg-center "
          style={{ backgroundImage: `url(${finance})` }}
        >
        </div>

        {/* Titre en bas */}
        <div className="p-2 sm:p-4 mx-auto  text-black ">
          Pour gagner de l'argent à côté
        </div>



      </label>


      <label htmlFor='experience' 
        className='w-[calc(50%-20px)] sm:w-1/5 shadow-xs shadow-gray-200 rounded-lg overflow-hidden flex flex-col justify-between relative'>
        {/* Bouton radio */}
        <input id='experience' type="radio" name="type-travail"
          className="radio radio-success w-4 h-4 p-0 absolute top-1 right-2" value='experience'
          checked={objectif === 'experience' }
          onChange={ (e) => handleType(e.target.value)} />

        {/* Image en fond */}
        <div 
          className="h-[60%] bg-cover bg-center "
          style={{ backgroundImage: `url(${certif})` }}
        >
        </div>

        {/* Titre en bas */}
        <div className="p-2 sm:p-4 mx-auto text-black sm:text-[0.6rem] md:text-[0.8rem] ">
          Pour acquerir de l'experience pour un emploi en plein temps
        </div>



      </label>

      <label htmlFor='aucun' 
        className='w-[calc(50%-20px)] sm:w-1/5 h-40 md:h-50 lg:h-70 shadow-xs shadow-gray-200 rounded-lg overflow-hidden flex flex-col justify-between relative'>
        {/* Bouton radio */}
        <input id='aucun' type="radio" name="type-travail"
          className="radio radio-success w-4 h-4 p-0 absolute top-1 right-2" value='aucun'
          checked={objectif === 'aucun' }
          onChange={ (e) => handleType(e.target.value)} />
        
        {/* Image en fond */}
        <div 
          className="h-[60%] bg-cover bg-center "
          style={{ backgroundImage: `url(${choix})` }}
        >
        </div>

        {/* Titre en bas */}
        <div className="p-2 sm:p-4 mx-auto text-black ">
          Je n'ai pas encore d'objectif en tete 
        </div>



      </label>


</div>


<BottomNavButtons2
        primaryLabel="Suivant"
        primaryRoute="/register/type-travail"
        secondaryLabel="Passer pour l'instant"
        secondaryRoute="/register/type-travail"
        step={66}
   /> 
   
            
        
           
    </div>
  )
}

export default ObjectifPage