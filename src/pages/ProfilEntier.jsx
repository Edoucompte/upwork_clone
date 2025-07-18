import UserProfileCard from '../components/UserProfilCard';
import CustomCard from '../components/CustomCard'
import React, { useState } from 'react'
import { FaAd, FaEdit, FaPencilAlt, FaPlus } from 'react-icons/fa';

const ProfilEntier = () => {
      const [showCard, setShowCard] = useState(true);
  return (
    <div className='py-10 px-30 bg-white min-h-screen text-black'>
         {showCard && (
        <CustomCard className="z-0" onDelete={() => setShowCard(false)} />
      )}  

      <div className=' flex w-full flex-col'>
        
       <UserProfileCard/>  
        
        <div className=' flex  flex-row'>
              <div className='w-2/5 flex flex-col gap-1 py-4 justify-around bg-gray-100'>
                  <div className='flex'>
                    <div className='w-4/5 ps-4 text-blue-400'>
                            <h5>Private to you</h5>
                            <p>Get Connects and tools to develop new skills, improve your efficiency with AI, and customize your settings to grow your business with Freelancer Plus. Upgrade plan</p>
                    </div>
                    <div className='w-1/5'>rrrrr</div>
                  </div>

                  <div className='p-6 flex flex-col gap-2 bg-gray-100'>
                <h2 className='text-2xl'>Promote with ads</h2>
              <div className='flex  justify-between'>
                <div>Availability badge</div> 
                <button> <FaPencilAlt/></button>
              </div>
              <span>Off</span>
            
              <div className='flex justify-between'>
                 <p>Boost your profile</p> 
                 <button><FaPencilAlt/></button>
              </div>
              <span>Off</span>
                  </div>

                  <div className=' p-6  my-4'>
                    <p className='text-2xl'>Connect:100</p>
                    <div className='flex my-2 justify-between'>
                        <a className='text-green-600'><u>View details</u> </a>
                        <a className='text-green-600'><u>Buy connects</u> </a>
                    </div>
                </div>

                <div className='py-4 flex justify-between p-6'>
                    <h1>Video introduction</h1> <button className='rounded-full p-2 text-green-500 border bg-white'> <FaPlus color='green' className=' '></FaPlus></button>
                </div>

                <div className='py-4 flex justify-between p-6'>
                    <h1>Hours per week</h1> <button className='rounded-full p-2 text-green-500 border bg-white'> <FaPencilAlt color='green' className=' '></FaPencilAlt></button>
                </div>
                
                <div className='p-6'>
                  <p>Less than 30 hrs/week</p>
                <p>Open to contract to hire</p>  
                </div>
                
                
                 <div className='py-3 flex justify-between p-6'>
                    <h1>Languages</h1> 
                    <div className='flex gap-2'>
                        <button className='rounded-full p-2 text-green-500 border bg-white'> <FaPlus color='green' className=' '></FaPlus></button>
                        <button className='rounded-full p-2 text-green-500 border bg-white'> <FaPencilAlt color='green' className=' '></FaPencilAlt></button>
                    </div>
        
                </div>   
                <div className=' px-6 flex justify-start'>
                        <h1>English:  Basics </h1>
                    </div>

                
               <h1 className='p-6 text-2xl'>Verifications</h1>

                <div className='py-4 flex justify-between p-6'>
                    <h1>Military veteran</h1> <button className='rounded-full p-2 text-green-500 border bg-white'> <FaPlus color='green' className=' '></FaPlus></button>
                </div>
                 <div className='py-4 flex justify-between p-6'>
                    <h1>Licenses</h1> <button className='rounded-full p-2 text-green-500 border bg-white'> <FaPlus color='green' className=' '></FaPlus></button>
                </div>
                 <div className='py-4 flex justify-between p-6'>
                    <h1>Education</h1> <button className='rounded-full p-2 text-green-500 border bg-white'> <FaPlus color='green' className=' '></FaPlus></button>
                </div>
              </div>

              <div className='w-3/5 bg-blue-300'>
              </div>
        </div>
      </div>
    </div>

  )
}

export default ProfilEntier