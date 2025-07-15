//import FileInput from '../components/FileInput'
import SignupFooter from '../components/signup/SignupFooter'
import SignupNavbar from '../components/signup/SignupNavbar'
import { useState } from 'react'
import Modal from '../components/Modal'
import ExperienceForm from '../components/ExperienceForm'
import BottomNavButtons from '../components/BottomNavButtons'

export default function ExperiencePage() {
  const [isShowModal, setShowModal] = useState(false)

  const handleSubmitXprience = (xp) => {

  }

  const handleCloseModal = () => {
    console.log("Modal closed");
    setShowModal(false)
  }

  const handleOpenModal = () => {
    setShowModal(true)
  }

  return (
    <>
      { isShowModal &&
          <Modal handleCloseModal={handleCloseModal}>
            {/* Formulaire */}
            <ExperienceForm onClose={() => handleCloseModal()} />
          </Modal>
      }

        {/* <SignupNavbar/> */}

        {/* CONTENT */}
        <main className='mt-6 sm:mt-10 p-8 md:p-30 bg-white text-black'>
            <div className='text-xs md:text-[0.90rem]'>
                <p > 5/10</p>
                <p className='text-xl sm:text-2xl md:text-4xl my-4 font-medium'>
                    Si vous avez une expérience de travail pertinente, ajoutez la ici.
                </p>
                
                <p>Les Freelancers qui ajoutent ont deux fois plus de chance de gagner du travail.
                  Mais si vous venez de débuter, vous pouvez toujours créer un bon profile.
                  Passez à la page suivante.
                </p>

                {/* Zone declencheur du modal */}
                <div className='mt-7 px-5 pt-12 pb-5 border-green-600 border-2 rounded-xl inline-block'
                  onClick={() => { handleOpenModal()}}
                >
                  <p className='bg-green-600 text-white rounded-full w-9 h-9 text-3xl text-center p-0'>
                    +
                  </p>
                  <p className='mt-4'>Ajouter une expérience professionnelle</p>
                </div>

            </div>

            
        </main>


    </>
  )
}
