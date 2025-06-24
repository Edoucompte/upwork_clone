import React from 'react'

export default function CompteOption({option, text, selectedOption, handleChange, children}) {
  return (
    <label className='p-6 w-[200px] text-xl border-2 rounded-xl'
        key={option}
        htmlFor={option}
    >
        <div className='flex justify-between mb-2'>
            <div>{children}</div>
            <input id={option} type="radio" name="type-compte" 
                className="radio radio-success" value={option}
                checked={selectedOption === option}
                onChange={handleChange} />
        </div>

        <p>{text}</p>
    </label>
  )
}
