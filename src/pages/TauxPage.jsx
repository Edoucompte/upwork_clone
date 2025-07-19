
import woman from '../assets/woman.jpg'
import React from 'react'
import BottomNavButtons2 from '../components/ButtomNavButtons2'

export default function TauxPage() {
  return (
      <main className='mt-10 p-5 md:p-20 bg-white text-black'>
        {/* CONTENT é à è ê â*/}
        <div className='text-xs md:text-[0.90rem]'>
            <p className='flex gap-2'> 
                <span>8/10</span>
            </p>
            <p className='text-xl sm:text-2xl md:text-4xl my-4 font-medium'>
                Maintenant, défissons votre taux horaire.
            </p>
            
            <p>
                Les clients verront ce taux sur votre profil et dans les résultats 
                de recherche une fois votre profile publié. Vous pourrez ajuster 
                votre prime à tout moment où vous soumettez à une offre.
            </p>

            <p className='my-4 text-green-700 underline'>Comment un profil peut-il m'aider à me démarquer ?</p>

            <div className="flex flex-wrap justify-center md:justify-between gap-4 align-center">
                <div>
                    <p>Du texte</p>
                </div>
            
                {/* EXAMPLE DE PROFIL*/}
                <div className='w-[85%] md:w-1/2 flex'>
                    <div className='m-auto bg-gray-100 text-black p-4 sm:p-10 rounded-lg'> 
                    <div className="w-15 h-15 rounded-full bg-cover mb-4" 
                        style={{backgroundImage: `url(${woman})`}}></div>
                    <p> 
                        Votre profil Upwork est ce qui permet de vous démarquer de la foule.
                        C'est ce que vous utilisez pour gagner du travail, alors faisons en 
                        sorte qu'il soit bon
                    </p>
                    <p className="text-xs mt-1">Conseil de pro Upwork</p>
                    </div>
                </div>
            </div>
        </div>
        <BottomNavButtons2
        primaryLabel=" Photo and Location"
        primaryRoute="/register/adresse"
        secondaryLabel="Passer pour l'instant"
        secondaryRoute="/register/adresse"
        step={90}
        /> 
    </main>
  )
}
