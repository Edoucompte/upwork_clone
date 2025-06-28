import React, { useEffect, useState } from 'react'

const SkillSuggestion = ({ suggestions, addSkill }) => {

  return (
    <div className='max-w-2/3'>
        <h1 className='text-2xl my-5'>Suggested skills</h1>
      <ul className="flex  flex-wrap gap-2 ">
        {suggestions.map((skill, index) => (
          <li key={index} className="bg-white  px-2 border rounded-lg text-black items-center gap-2">
            <button
              onClick={() => addSkill(skill)}
              className="text-2xl text-black-600"
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
