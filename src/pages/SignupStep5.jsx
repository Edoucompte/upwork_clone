import ExperienceForm from '../components/signup/ExperienceForm'
//import FileInput from '../components/FileInput'
import SignupFooter from '../components/signup/SignupFooter'
import SignupNavbar from '../components/signup/SignupNavbar'
import { useState } from 'react'
import Modal from '../components/Modal'

export default function SignupStep5() {
  const [title, setTitle] = useState(null)
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
            <ExperienceForm handleSubmit={handleSubmitXprience}/>
          </Modal>
      }

        <SignupNavbar/>

        {/* CONTENT */}
        <main className='mt-10 p-8 md:p-30'>
            <div className='text-xs md:text-[0.90rem]'>
                <p > 5/10</p>
                <p className='text-xl sm:text-2xl md:text-4xl my-4 font-medium'>
                    Si vous avez une expérience de travail pertinente, ajoutez la ici.
                </p>
                
                <p>Les Freelancers qui ajoutent ont deux fois plus de chance de gagner du travail.
                  Mais si vous venez de débuterm vous pouvez toujours créer un bon profile.
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

        {/* LE BAS é è â ê à */}
        <SignupFooter onSubmit={handleSubmitXprience} step={5} submitButtonText={"Ensuite, ajouter votre formation"}/>
    </>
  )
}
