import React, { useState } from 'react'

export default function ExperienceForm() {
  const [title, setTitle] = useState(null)
  const [company, setCompany] = useState(null)
  const [ville, setVille] = useState(null)
  //const [pays, setPays] = useState(null)
  // é à è ê â ô
  return (
    <form action="" className='p-5'>
        <legend className='mb-3 text-xl font-semibold'>Ajouter une expérience professionnelle</legend>

        {/* TITRE */}
        <div>
            <label htmlFor="title">Titre <span className='text-red-400'>*</span></label>
            <input type="text" id='title' value={title} placeholder='Ex: Ingénieur Logiciek'
                onChange={ (e) => {setTitle(e.target.value)}} />
        </div>

        {/* ENTREPRISE */}
        <div>
            <label htmlFor="company">Entreprise <span className='text-red-400'>*</span></label>
            <input type="text" id='company' value={company} placeholder='Ex: Microsoft'
                onChange={ (e) => {setCompany(e.target.value)}} />
        </div>

        {/* EMPLACEMENT */}
        <div>
            <p>Emplacement</p>
            <div className='flex gap-5'>
                <input type="text" id='ville' value={ville} placeholder='Ex: Londres'
                    onChange={ (e) => {setVille(e.target.value)}} />
            </div>
        </div>
            
            {/* dropdown <input type="text" id='pays' value={pays} placeholder='Ex: Pays'
                onChange={ (e) => {setVille(e.target.value)}} /> */}
    </form>
  )
}
