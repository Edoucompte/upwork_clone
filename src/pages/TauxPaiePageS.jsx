import BottomNavButtons from '../components/BottomNavButtons'
import woman from '../assets/woman.jpg'
import React from 'react'

export default function TauxPaiePage() {
  return (
    <main className={'text-black min-h-screen bg-white px-5 text-xs sm:text-lg sm:px-10 md:px-20 relative' } >
      <div className='flex flex-wrap justify-between items-start gap-x-2 gap-y-5'>
        {/* Texte */}
        <div className="flex flex-col justify-center w-full md:w-4/7 py-10 ">
          <p>8/10</p>
          <div className=" text-xl sm:text-2xl md:text-4xl font-semibold">
            Super. A présent écrivew votre bio pour vous décrire au monde.
          </div>
          <div>
            Permettez aux gens de vous connaitre en coup d'oeil. 
            Quel travail faites-vous le mieux? Dites-leur clairement, 
            en utilisant des paragraphes et des tirets. 
            Vous pouvez toujours le modifier plus tard; 
            assurez-vous simplement de relire maintenant.
          </div>

          <div className="my-6">
            <textarea className='border rounded-lg w-full h-50 p-2'
              placeholder="Entrez vos meilleurs compétences, et vos intérêts. C'est l'une des première chose que les clients voient sur votre profil.">
            </textarea>
            <p className='text-end text-xs'>Au moins 100 caractères</p>
          </div>
        </div>

        {/* EXAMPLE DE PROFIL*/}
        <div className='w-full md:w-2/7 flex text-[0.8rem] md:text-lg mt-4'>
          <div className='m-auto w-[85%] sm:w-[300px] bg-gray-100 text-black p-4 sm:p-10 rounded-lg flex flex-col'> 
            <div className="w-full flex flex-col ">
              <div className="m-auto w-25 h-25 rounded-full bg-cover bg-center mb-4 avatar avatar-online" 
                style={{backgroundImage: `url(${woman})`}}>
              </div>
              <p className='font-semibold m-auto text-lg'>Martine G.</p>

            </div>
            <p className='m-auto'>
              <span className='mx-2'></span>
              5.0
              <span className='mx-2'>$75.00/hr</span>
              <span className='mx-2'></span>
              14 jobs
            </p>
            <p> 
              I'm developer expemented in building websites for small and medium sized businesses.
              Whether you're trying to win work, list your services, or create a new online store,
              I can help.
            </p>

            <ul className='flex flex-col gap-3 mt-2'>
              <li className=''> Knows HTML and CSS3, PHP, jQuery, Wordpress, and SEO</li>
              <li > Full project management from start to finish</li>
              <li > Regular comminucation is important to me, so let's keep in touch.</li>
            </ul>
          </div>
        </div>
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
