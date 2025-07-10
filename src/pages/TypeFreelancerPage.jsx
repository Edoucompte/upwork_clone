import React from 'react'
import search from '../assets/clipart.png'
import loupe from '../assets/glass.jpg'
import fa from '../assets/fa.jpg'
import ex from '../assets/ex.jpg'
import TypeButton from '../components/TypeButton'
import { useNavigate } from 'react-router-dom'
import BottomNavButtons from '../components/BottomNavButtons'






const TypeFreelancerPage = () => {
  const navigate = useNavigate()
  const [freelancerType, setFreelancerType] = React.useState('')  
  const handleType = (e) => {

    setFreelancerType(e)
    console.log('Type de freelancer sélectionné:', freelancerType)
   
    }
  return (
  <div className='py-10 px-30 bg-white min-h-screen text-black'>
         <p>1/3</p>
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
    <TypeButton  onClick={handleType}label="Je suis tout nouveau dans ce domaine" value="nouveau"   className="p-2 ms-10   w-1/2 text-black font-semibold">
      
    </TypeButton>



  </div>

<div className='w-1/3 h-72  rounded-lg overflow-hidden flex flex-col justify-between'>
    
    {/* Image en fond */}
    <div 
      className="h-60 bg-cover bg-center "
      style={{ backgroundImage: `url(${ex})` }}
    >
    </div>

    {/* Titre en bas */}
   <TypeButton  onClick={handleType}label="J'ai une certaine expérience" value="experimenté"   className="p-2 ms-10   w-1/2 text-black font-semibold">
      
    </TypeButton>



  </div>


  <div className='w-1/3 h-72  rounded-lg overflow-hidden flex flex-col justify-between'>
    
    {/* Image en fond */}
    <div 
      className="h-60 bg-cover bg-center "
      style={{ backgroundImage: `url(${fa})` }}
    >
    </div>

    {/* Titre en bas */}
    <TypeButton  onClick={handleType}label="Je suis un expert" value="expert"   className="p-2 ms-10   w-1/2 text-black font-semibold">
    </TypeButton>

  </div>

   
</div>

 <BottomNavButtons
        primaryLabel="Suivant"
        primaryRoute="/objectif"
        secondaryLabel="Passer pour l'instant"
        secondaryRoute="/objectif"
        step={33}
   /> 
   
            
        
           
    </div>
  )
}

export default TypeFreelancerPage