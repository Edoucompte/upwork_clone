import BottomNavButtons2 from '../components/ButtomNavButtons2'
import SignupFooter from '../components/signup/SignupFooter'
import SignupNavbar from '../components/signup/SignupNavbar'
import { useState } from 'react'

export default function FonctionPage() {
  const [title, setTitle] = useState(null)

  const handleSubmitTitle = (title) => {
    console.log(title);
    
  }

  return (
    <>
       

        {/* CONTENT */}
        <main className='mt-10 p-8 md:p-30'>
            <div className='text-xs md:text-[0.90rem]'>
                <p > 4/10</p>
                <p className='text-xl sm:text-2xl md:text-4xl my-4 font-medium'>
                    Compris. Maintenant ajoutez un titre pour dire au monde ce que vous faites.
                </p>
                
                <p>C'est la toute première chose que les clients voient, 
                    alors faites le compter. Démarquez-vous en décrivant votre 
                    expertise en vos mots propres.</p>

                <p className='py-2'>Votre rôle professionnel</p>

                <input type="text" placeholder='Entrez vos compétences ici' 
                    className='border-1 p-2 rounded-[0.5rem] w-full border-gray-300'
                    onChange={(e) => {setTitle(e.target.value)}} value={title}
                    />
                <p className=" hidden text-xs text-right font-light ">Max 15 compétences</p>

            </div>
        </main>

        {/* LE BAS é è â ê à */}

        <BottomNavButtons2 primaryLabel="Ensuite, ajoutez votre expérience"
                    primaryRoute="/experience"
                    step={4}/>  
        
    </>
  )
}
