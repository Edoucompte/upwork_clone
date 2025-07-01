import React from 'react'
import search from '../assets/clipart.png'
import loupe from '../assets/glass.jpg'
import fa from '../assets/fa.jpg'
import ex from '../assets/ex.jpg'

const TypeFreelancerPage = () => {
  return (
      <div className='py-10 px-30 bg-white min-h-screen text-black'>
         <p>10/10</p>
            <h1 className='text-4xl my-3'>Quelques questions rapide.Tout d'abord avez vous deja travaillé en tant que freelancer?</h1>
    <p className='my-8'>Cela nous permettra dans quelle mesure nous pouvons vous aider .
        Nous ne partagerons notre reponse à personne d'autre  y compris les clients potentiels 
    </p>
    

    <div className='flex gap-4'>

  <div className='w-1/3 h-72  rounded-lg overflow-hidden flex flex-col justify-between'>
    
    {/* Image en fond */}
    <div 
      className="h-60 bg-cover bg-center "
      style={{ backgroundImage: `url(${loupe})` }}
    >
    </div>

    {/* Titre en bas */}
    <div className="p-2 ms-10   w-1/2 text-black font-semibold">
      Je suis tout nouveau dans ce domaine
    </div>



  </div>

<div className='w-1/3 h-72  rounded-lg overflow-hidden flex flex-col justify-between'>
    
    {/* Image en fond */}
    <div 
      className="h-60 bg-cover bg-center "
      style={{ backgroundImage: `url(${ex})` }}
    >
    </div>

    {/* Titre en bas */}
    <div className="p-2 ms-10  w-1/2 text-black font-semibold">
      J'ai une certaine expérience
    </div>



  </div>


  <div className='w-1/3 h-72  rounded-lg overflow-hidden flex flex-col justify-between'>
    
    {/* Image en fond */}
    <div 
      className="h-60 bg-cover bg-center "
      style={{ backgroundImage: `url(${fa})` }}
    >
    </div>

    {/* Titre en bas */}
    <div className="p-2 ms-10   w-1/2 text-black font-semibold">
      Je suis un expert
    </div>



  </div>


</div>



   
            
        
           
    </div>
  )
}

export default TypeFreelancerPage