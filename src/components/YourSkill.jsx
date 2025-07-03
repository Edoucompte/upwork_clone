import React from 'react'

const YourSkill = ({skilladd}) => {
    

  return (
    <div className='max-w-5/6'>
        <h1 className='text-2xl my-5'>Your skills</h1>
        <div className=' border text-black border-black rounded-xl p-2 min-h-10 '>
            <ul className='flex flex-wrap  justify-normal items-center gap-2 text-xs md:text-lg' > 
                {skilladd.map((skill, index) => (
                    <li key={index}>{skill} </li>
                ))}
            </ul>
           
        </div>
         <div className='text-right text-xs md:text-lg mt-0.5'>Max15 skills </div>
    </div>
  )
}

export default YourSkill