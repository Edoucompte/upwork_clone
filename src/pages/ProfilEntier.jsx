import React, { useState } from 'react'
import UserProfileCard from '../components/UserProfilCard';
import CustomCard from '../components/CustomCard'
import { FaPencilAlt, FaPlus } from 'react-icons/fa';

const ProfilEntier = () => {
  const [showCard, setShowCard] = useState(true);

  return (
    <div className='py-10 px-4 md:px-20 bg-white min-h-screen text-black'>
      {showCard && (
        <CustomCard className="z-0" onDelete={() => setShowCard(false)} />
      )}

      <div className='flex flex-col gap-6'>
        <UserProfileCard />

        <div className='flex flex-col md:flex-row gap-6'>
          {/* LEFT SIDE */}
          <div className='w-full md:w-2/5 flex flex-col gap-4 bg-gray-100 p-4 rounded-md'>

            <div className='flex flex-col gap-2'>
              <h5 className='text-blue-400'>Private to you</h5>
              <p className='text-sm'>
                Get Connects and tools to develop new skills, improve your efficiency with AI, and customize your settings to grow your business with Freelancer Plus. Upgrade plan
              </p>
            </div>

            <div className='p-4 bg-white rounded-md shadow'>
              <h2 className='text-lg font-semibold mb-2'>Promote with ads</h2>
              <div className='flex justify-between items-center'>
                <span>Availability badge</span>
                <button><FaPencilAlt /></button>
              </div>
              <span className='text-sm text-gray-500'>Off</span>

              <div className='flex justify-between items-center mt-2'>
                <span>Boost your profile</span>
                <button><FaPencilAlt /></button>
              </div>
              <span className='text-sm text-gray-500'>Off</span>
            </div>

            <div className='p-4 bg-white rounded-md shadow'>
              <p className='text-xl font-semibold'>Connects: 100</p>
              <div className='flex justify-between mt-2'>
                <a className='text-green-600 underline'>View details</a>
                <a className='text-green-600 underline'>Buy connects</a>
              </div>
            </div>

            <div className='p-4 bg-white rounded-md shadow flex justify-between items-center'>
              <h1>Video introduction</h1>
              <button className='rounded-full p-2 border text-green-500'>
                <FaPlus />
              </button>
            </div>

            <div className='p-4 bg-white rounded-md shadow flex justify-between items-center'>
              <h1>Hours per week</h1>
              <button className='rounded-full p-2 border text-green-500'>
                <FaPencilAlt />
              </button>
            </div>

            <div className='p-4 bg-white rounded-md shadow'>
              <p>Less than 30 hrs/week</p>
              <p>Open to contract to hire</p>
            </div>

            <div className='p-4 bg-white rounded-md shadow flex justify-between items-center'>
              <h1>Languages</h1>
              <div className='flex gap-2'>
                <button className='rounded-full p-2 border text-green-500'>
                  <FaPlus />
                </button>
                <button className='rounded-full p-2 border text-green-500'>
                  <FaPencilAlt />
                </button>
              </div>
            </div>

            <div className='px-4'>
              <p>English: Basics</p>
            </div>

            <h1 className='text-xl font-semibold mt-4'>Verifications</h1>

            {['Military veteran', 'Licenses', 'Education'].map(label => (
              <div key={label} className='p-4 bg-white rounded-md shadow flex justify-between items-center'>
                <h1>{label}</h1>
                <button className='rounded-full p-2 border text-green-500'>
                  <FaPlus />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className='w-full md:w-3/5 bg-blue-300 p-4 rounded-md'>
            {/* Ajoute ton contenu ici */}
            <p className="text-white text-center text-lg">Contenu principal à droite</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilEntier;
