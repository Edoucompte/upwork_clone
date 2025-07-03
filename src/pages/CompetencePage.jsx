import React, { useState } from 'react'
import SkillSuggestion from '../components/SkillSuggestion'
import YourSkill from '../components/YourSkill'

const CompetencePage = () => {
const [skills, setSkills] = React.useState([]);
 const[suggestions,setSuggestions]  = useState([
        'JavaScript',
        'React',
        'Node.js',
        'Python',
        'Java',
        'C++',
        'Ruby on Rails',
        'PHP',
        'HTML & CSS',
        'SQL',
        'Machine Learning',
        'Data Analysis',
        'UI/UX Design',
        'Project Management',
        'Content Writing'
    ])

    const addSkill = (skill) => {
        console.log(skill)
        setSkills([...skills, skill])
        setSuggestions(suggestions.filter((item) => item !== skill))
    }

  return (
    <div className='py-8 px-30 bg-white min-h-screen text-black'>
        <p>3/10</p>
        <h1 className='text-3xl my-3'>Neartly there, What work are your here to do ?</h1>
        <p>Your skills show clients what you can offer, and helps us choose which jobs to recommend you</p>
        <p>Add and remove the one. We have suggested, or start typing to pics more. It's up to you.</p>

        <button className='btn btn-link my-3 underline' type="button"> Why choosing carrefull matters</button>
        <div className=' my-5  flex flex-col gap-4'>
            <YourSkill skilladd={skills}/>

            <SkillSuggestion  suggestions={suggestions} addSkill={addSkill}/> 
        </div>
        
      <div className=" mt-72 ">
        {/* Barre noire */}
        <div className="h-1 bg-black w-full"></div>
        {/* Bouton en bas à droite */}
        <div className="flex justify-end   my-4">
          <button type="submit" className="bg-green-700 py-2 text-white rounded-2xl px-6 mb-5">
            Ensuite,le titre de votre profil
          </button>
        </div>
      </div>


    </div>
  )
}

export default CompetencePage