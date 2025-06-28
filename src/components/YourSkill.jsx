import React from 'react'

const YourSkill = ({skilladd}) => {
    

  return (
    <div className='max-w-5/6'>
        <h1 className='text-2xl my-5'>Your skills</h1>
        <div className=' border text-black border-black rounded-2xl p-2 min-h-10 '>
            <ul className='flex flex-wrap  justify-normal  gap-2' > 
                {skilladd.map((skill, index) => (
                    <li key={index}>{skill} </li>
                ))}
            </ul>
           
        </div>
         <div className='text-right'>Max15 skills </div>
    </div>
  )
}

export default YourSkill