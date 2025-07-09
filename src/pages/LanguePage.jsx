
import BottomNavButtons2 from '../components/ButtomNavButtons2'
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
    <div className='text-black min-h-screen bg-white px-10 md:px-30 relative' >
      {/* Texte d'intro */}
      <div className="flex flex-col gap-5 max-w-3/4 py-10 ">
        <p>7/10</p>
        <div className="text-4xl">
          Looking good. Next, tell us which languages you speak.
        </div>
        <div>
          Upwork is global, so clients  are often interestend to know what langage you speak. English is a must, but do you speak any other languages.
        </div>
      </div>

       <div className="p-6 text-black">
      <h2 className="text-2xl mb-4">Ajouter une langue</h2>
      

      <ul className="my-4 flex flex-col gap-2">
        {languages.map((lang, index) => (
          <li  className='flex gap-4  text-green justify-start ' key={index}>
           <div className='w-1/3  border px-2 border-black rounded-md py-2'> {lang.langue} </div>  
            <div  className='w-1/3   px-2 border border-black rounded-md py-2'>{lang.proficiency}</div> 
            <button type="button"      onClick={() => handleDelete(index)} className="  text-2xl px-4 py-2 text-red-600 rounded">x</button>
          </li>
        ))}
      </ul>

      <LanguageForm onAdd={handleAddLanguage} />
    </div>

     <BottomNavButtons2
        primaryLabel=" Ensuite , ajouter votre adresse"
        primaryRoute="/adresse"
        secondaryLabel="Passer pour l'instant"
        secondaryRoute="/adresse"
        step={7}
   /> 

 
    </div>
   
  )
}

export default LanguePage
