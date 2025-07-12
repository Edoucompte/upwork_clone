import UserProfileCard from '../components/UserProfilCard';
import CustomCard from '../components/CustomCard'
import React, { useState } from 'react'

const ProfilEntier = () => {
      const [showCard, setShowCard] = useState(true);
  return (
    <div className='py-10 px-30 bg-white min-h-screen text-black'>
         {showCard && (
        <CustomCard onDelete={() => setShowCard(false)} />
      )}  

      <div className=' flex w-full flex-col'>
        
       <UserProfileCard/>  
        
        <div className=' flex  flex-row'>
              <div className='w-1/2 bg-amber-200'></div>
              <div className='w/1/2 bg-blue-300'></div>
        </div>
      </div>
    </div>

  )
}

export default ProfilEntier