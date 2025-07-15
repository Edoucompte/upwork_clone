import React from 'react'
import search from '../assets/clipart.png'
import loupe from '../assets/glass.jpg'
import fa from '../assets/fa.jpg'
import ex from '../assets/ex.png'
import TypeButton from '../components/TypeButton'
//import { useNavigate } from 'react-router-dom'
import BottomNavButtons from '../components/BottomNavButtons'






const TypeFreelancerPage = () => {
  //const navigate = useNavigate()
  const [freelancerType, setFreelancerType] = React.useState('')  
  const handleType = (e) => {
    setFreelancerType(e)
    console.log('Type de freelancer sélectionné:', freelancerType)
  }

  const createTypeInput = (option, text, image) => {
    return (
      <label className='p-1.5 sm:p-4 w-75 shadow-xs shadow-black rounded-xl cursor-pointer'
        htmlFor={option}
      >
          <div className='flex justify-between mb-2 relative'>
            <img className="max-h-[50%] w-full bg-center bg-cover "
              src={image} alt={option}
            />
            <input id={option} type="radio" name="type-travail"
                className="radio radio-success w-4 h-4 p-0 absolute top-[-10px] right-[-10px]" value={option}
                checked={freelancerType === option}
                onChange={ (e) => handleType(e.target.value)} />
          </div>
  
          <p className='text-xs sm:text-[1rem] md:text-lg '>{text}</p>
      </label>
    )
  }
  return (
  <div className='py-10 px-4 sm:px-10 lg:px-30 bg-white min-h-screen text-black'>
         <p>1/3</p>
            <h1 className='text-xl sm:text-4xl my-3'>Quelques questions rapide. Tout d'abord avez vous déjà travaillé en tant que freelancer?</h1>
    <p className='my-8 text-xs sm:text-lg'>Cela nous permettra dans quelle mesure nous pouvons vous aider .
        Nous ne partagerons notre reponse à personne d'autre  y compris les clients potentiels 
    </p>
    

    <div className='flex justify-center align-center gap-3'>

      {/* Option 1 */}
      {createTypeInput("nouveau", "Je suis tout nouveau dans ce domaine", loupe)}

      {/*<div className=' cursor-pointer w-1/3 h-72  rounded-lg overflow-hidden flex flex-col justify-between'>
        
        {/* Image en fond 
        <div 
          className="h-60 bg-cover bg-center "
          style={{ backgroundImage: `url(${loupe})` }}
        >
        </div>

        {/* Titre en bas 
        <TypeButton  onClick={handleType}label="Je suis tout nouveau dans ce domaine" 
          value="nouveau"   className="p-2 ms-10   w-1/2 text-black font-semibold cursor-pointer">
          
        </TypeButton>



      </div> */}

      {/* Option 2 */}
      {createTypeInput("experimented", "J'ai une certaine expérience", ex)}

      {/*<div className='cursor-pointer w-1/3 h-72  rounded-lg overflow-hidden flex flex-col justify-between'>
        
          {/* Image en fond 
          <div 
            className="h-60 bg-cover bg-center "
            style={{ backgroundImage: `url(${ex})` }}
          >
          </div>

          {/* Titre en bas 
        <TypeButton  onClick={handleType}label="J'ai une certaine expérience" 
          value="experimenté"   className="p-2 ms-10   w-1/2 text-black font-semibold cursor-pointer">
            
          </TypeButton>
      </div> */}

      {/* Option 3 */}
      {createTypeInput("expert", "Je suis un expert", fa)}


      {/*<div className='cursor-pointer w-1/3 h-72  rounded-lg overflow-hidden flex flex-col justify-between'>
        
        {/* Image en fond 
        <div 
          className="h-60 bg-cover bg-center "
          style={{ backgroundImage: `url(${fa})` }}
        >
        </div>

        {/* Titre en bas 
        <TypeButton  onClick={handleType}label="Je suis un expert" value="expert"   
          className="p-2 ms-10   w-1/2 text-black font-semibold cursor-pointer">
        </TypeButton> 

      </div>*/}

   
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