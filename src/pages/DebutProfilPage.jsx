import Modal from '../components/Modal';
import React, { useState } from 'react'
import LinkedInCvImport from '../components/LinkedInCvImport';
import woman from '../assets/woman.jpg'
import BottomNavButtons2 from '../components/ButtomNavButtons2';

export default function DebutProfilPage() {
  const [isShowModal, setShowModal] = useState(false)
  const [typeImport, setTypreImport] = useState(null)

  const handleSubmit = () =>{}

  const handleCloseModal = () => {
    console.log("Modal closed");
    setShowModal(false)
  }

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const ImportButton = (text, logo, handleClick) => {
    return (
      <div className=" border-2 border-green-700 text-green-700 flex p-2 rounded-lg "
        onClick={handleClick}
      >
        <p className="mx-auto"> {logo} {text}</p>
      </div>
    )
  }

  return (
    <>
      { isShowModal &&
          <Modal handleCloseModal={handleCloseModal}>
            {/* Formulaire */}
            {
              typeImport === '1' ?
                <LinkedInCvImport />:
                typeImport === '2' ?
                <div> kd</div> :
                handleCloseModal()
            }

          </Modal>
      }

        {/* CONTENT é à è ê â*/}
        <main className='pt-10 p-5 md:p-20 bg-white text-black'>
            <div className='text-xs md:text-[0.90rem]'>
                <p className='flex gap-2'> 
                  <span>1/10</span>
                  <span>Créez votre profil</span>
                  <span> 10 à 20 minutes</span>
                </p>
                <p className='text-xl sm:text-2xl md:text-4xl my-4 font-medium'>
                    Comment aimeriez-vous nous parler de vous ?
                </p>
                
                <p>
                  Nous devons évaluer votre formation, votre expérience et vos compétences. 
                  Importer vos informations est plus rapide : 
                  vous pouvez les modifier avant la mise en ligne de votre profil.
                </p>

                <p className='my-4 text-green-700 underline'>Comment un profil peut-il m'aider à me démarquer ?</p>

                <div className="flex flex-wrap justify-center md:justify-between gap-4 align-center">
                  {/* Zone declencheur du modal */}
                  <div className='w-[75%] md:w-1/3 flex flex-col gap-3'>
                    {
                      ImportButton('Importer depuis LinkedIn', null, ()=>{
                        setTypreImport('1')
                        handleOpenModal()
                      })
                    }

                    {
                      ImportButton('Télécharger votre CV', null, ()=>{
                        setTypreImport('2')
                        handleOpenModal()
                      })
                    }

                    {
                      ImportButton('Créer votre profil ici', null, ()=>{
                        setTypreImport('3')
                        handleOpenModal()
                      })
                    }
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
                  primaryLabel="Suivant"
                  primaryRoute="/register/specialite"
                  secondaryLabel="Passer pour l'instant"
                  secondaryRoute="/register/specialite"
                  step={10}
            /> 
        </main>

        {/* LE BAS é è â ê à */}
        
    </>
  )
}
