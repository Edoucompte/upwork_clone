import SignupFooter from '../components/signup/SignupFooter'
import SignupNavbar from '../components/signup/SignupNavbar'
import { useState } from 'react'

export default function SignupStep5() {
  const [title, setTitle] = useState(null)

  const handleSubmitXprience = (xp) => {

  }

  return (
    <>
        <SignupNavbar/>

        {/* CONTENT */}
        <main className='mt-10 p-8 md:p-30'>
            <div className='text-xs md:text-[0.90rem]'>
                <p > 5/10</p>
                <p className='text-xl sm:text-2xl md:text-4xl my-4 font-medium'>
                    Si vous avez une expérience de travail pertinente, ajoutez la ici.
                </p>
                
                <p>Les Freelancers qui ajoutent</p>

                <p className='py-2'>Votre rôle professionnel</p>

                <input type="text" placeholder='Entrez vos compétences ici' 
                    className='border-1 p-2 rounded-[0.5rem] w-full border-gray-300'
                    onChange={(e) => {setTitle(e.target.value)}} value={title}
                    />
                <p className=" hidden text-xs text-right font-light ">Max 15 compétences</p>

            </div>
        </main>

        {/* LE BAS é è â ê à */}
        <SignupFooter onSubmit={handleSubmitXprience} step={5} submitButtonText={"Ensuite, ajouter votre formation"}/>
    </>
  )
}
