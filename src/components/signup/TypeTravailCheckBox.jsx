import React from 'react'

export default function TypeTravailCheckBox({
    option, selectedOptions, 
    title, text, 
    handleChange, image
}) {
    return (
      <label className='p-4 w-[250px]  h-[300px] border rounded-xl'
          key={option}
          htmlFor={option}
      >
          <div className='flex justify-between mb-2'>
              <img src={image} alt="" />
              <input id={option} type="checkbox" name="type-travail" 
                  className="checkbox checkbox-success" value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={ (e) => handleChange(e.target.value)} />
          </div>
  
          <p className='font-medium text-[1.25rem] mb-2'>{title}</p>
          <p className='text-xs'>{text}</p>
      </label>
    )
  }
