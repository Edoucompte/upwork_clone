import React from 'react'
import woman from '../assets/woman.jpg'
import BottomNavButtons2 from '../components/ButtomNavButtons2';

export default function ProfilPresentation() {

  const handleSubmit = () => {}

  return (
    <>
      <main className='mt-10 px-4 py-6 sm:px-6 md:px-10 lg:px-20 bg-white text-black'>
        <div className='max-w-screen-xl mx-auto text-xs md:text-base'>
          
          {/* Step indicator */}
          <p className='flex gap-2'>
            <span>8/10</span>
          </p>

          {/* Title */}
          <p className='text-xl sm:text-2xl md:text-4xl my-4 font-medium'>
            Great. Now write a bio to tell the world about yourself
          </p>

          {/* Description */}
          <p className='mb-8'>
            Help people get to know you at a glance. What work do you do best? Tell them clearly, using paragraphs or bullet points.
            You can always edit later; just make sure you proofread now.
          </p>

          {/* Layout section */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-6 items-center">
            
            {/* Textarea */}
            <div className='w-full max-w-md'>
              <textarea
                className="w-full mt-6 p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-white-500"
                placeholder="Enter your skills, experiences, and interests"
                rows={5}
              />
              <span className='block text-end p-1 text-sm text-gray-600'>At least 100 characters</span>
            </div>

            {/* Profile example */}
            <div className='w-full max-w-md'>
              <div className='bg-gray-100 text-black p-5 sm:p-8 rounded-lg text-center'>
                <div
                  className="w-20 h-20 mx-auto rounded-full bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url(${woman})` }}
                ></div>
                <p>
                  Votre profil Upwork est ce qui permet de vous démarquer de la foule. C'est ce que vous utilisez pour gagner du travail,
                  alors faisons en sorte qu'il soit bon.
                </p>
                <p className="text-xs mt-2 text-gray-600">Conseil de pro Upwork</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="mt-10">
            <BottomNavButtons2
              primaryLabel="Next, set your rate"
              primaryRoute="/horaire"
              secondaryLabel="Passer Backs"
              secondaryRoute="/horaire"
              step={80}
            />
          </div>
        </div>
      </main>
    </>
  );
}
