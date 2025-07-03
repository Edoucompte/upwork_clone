import React, { useEffect, useState } from 'react'

const SkillSuggestion = ({ suggestions, addSkill }) => {

  return (
    <div className='max-w-4/5'>
        <h1 className='text-2xl my-5'>Suggested skills</h1>
      <ul className="flex  flex-wrap gap-2 ">
        {suggestions.map((skill, index) => (
          <li key={index} className="bg-white px-2 border rounded-lg text-black items-center gap-2 cursor-pointer text-xs md:text-lg"
            onClick={() => addSkill(skill)}
          >
            <button
              className="text-2xl text-black-600 mr-0.5"
            >
              +
            </button>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillSuggestion
