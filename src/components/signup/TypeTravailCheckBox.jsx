import React from 'react'

export default function TypeTravailCheckBox({
    option, selectedOptions, 
    title, text, 
    handleChange, image
}) {
    return (
      <label className='p-4 w-[250px] sm:h-[350px] border rounded-xl relative'
          key={option}
          htmlFor={option}
      >
        <input id={option} type="checkbox" name="type-travail" 
                  className="checkbox checkbox-success absolute top-1 right-2 z-10 w-4 h-4" value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={ (e) => handleChange(e.target.value)} />

          <div className='flex justify-between mb-2'>
              {image}
              
          </div>
  
          <p className='font-medium text-xs sm:text-[1.25rem] mb-2'>{title}</p>
          <p className='text-[0.6rem] sm:text-xs'>{text}</p>
      </label>
    )
  }
