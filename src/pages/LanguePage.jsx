
import BottomNavButtons from '../components/BottomNavButtons'
import LanguageForm from '../components/LangueForm'
import React, { useState } from 'react'


const LanguePage = () => {
 const [languages, setLanguages] = useState([])

 

  const handleAddLanguage = (lang) => {
    setLanguages([...languages, lang])
    console.log(languages)
  }
  const handleDelete=(index) => {
    const newLanguages = languages.filter((_, i) => i !== index)
    setLanguages(newLanguages)
  }

  return (
    <div className='text-black min-h-screen bg-white px-5 text-xs sm:text-lg sm:px-10 md:px-30 relative' >
      {/* Texte d'intro */}
      <div className="flex flex-col gap-5 max-w-3/4 py-10 ">
        <p>7/10</p>
        <div className=" text-xl sm:text-2xl md:text-4xl font-semibold">
          Looking good. Next, tell us which languages you speak.
        </div>
        <div>
          Upwork is global, so clients  are often interestend to know what langage you speak. English is a must, but do you speak any other languages.
        </div>
      </div>

       <div className="p-1 text-black">
        <h2 className=" text-lg sm:text-2xl mb-4">Ajouter une langue</h2>

        <ul className="my-4 flex flex-col gap-2">
          {languages.map((lang, index) => (
            <li  className='flex gap-2 text-green justify-between ' key={index}>
              <div className='w-[45%] border px-2 border-black rounded-md py-2'> {lang.langue} </div>  
              <div  className='w-[45%]  px-2 border border-black rounded-md py-2'>{lang.proficiency}</div> 
              <button type="button"
                onClick={() => handleDelete(index)} 
                className=" text-2xl px-3 py-1 text-red-600 border border-green-600 rounded">x</button>
            </li>
          ))}
        </ul>

        <LanguageForm onAdd={handleAddLanguage} />
      </div>

     <BottomNavButtons
        primaryLabel=" Write  an overview"
        primaryRoute="/presentation"
        secondaryLabel="Passer pour l'instant"
        secondaryRoute="/adresse"
        step={70}
   /> 

 
    </div>
   
  )
}

export default LanguePage
