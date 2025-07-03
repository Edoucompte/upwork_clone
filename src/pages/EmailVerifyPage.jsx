import Footer from '../components/Footer'
import SignupNavbar from '../components/signup/SignupNavbar'
import React from 'react'

export default function EmailVerifyPage() {
  const userEmail = "bonheuryassegoungbe@gmail.com"
  return (
    <div>
        <SignupNavbar />
        <main>
            <div className='flex mt-6 min-h-screen'>
                <div className="mx-auto flex flex-col gap-3 items-center text-xs text-center w-[60%]">
                    {/* EMAIL IMAGE */}
                    <img src='' alt="email icon" className='w-15 h-15'/>

                    <p className='text-lg font-semibold'>Vérifiez votre email pour continuer</p>

                    <p>
                        Nous venons d'envoyer un mail à l'adresse :
                    </p>

                    <p>{userEmail}</p>

                    <p>
                        Veuillez vérifier votre courrier électronique et sélectionner le lien 
                        pour vérifier votre adresse
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button className='px-5 py-2 border-2 border-green-700 rounded-lg text-green-700'>
                            Envoyer à nouveau
                        </button>
                        <button className='px-5 py-2 rounded-lg text-white bg-green-700'>
                            Accéder à la boite de récupération Gmail
                        </button>
                    </div>

                    <p className="underline text-green-700 mt-6">
                        Vous n'avez pas reçu d'e-mail ?
                    </p>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}
