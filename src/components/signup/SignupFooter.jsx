import React from 'react'

export default function SignupFooter({step=1, total=100, submitButtonText, onBackClick = ()=>{}, onSubmit = ()=>{} }) {
  return (
    <div className="sticky bottom-4 z-100">
        <div className=' py-5'>
            <progress className="progress w-full" value={`${step*10}`} max={`${total}`}></progress>
        </div>

        {/* BOUTONS DU BAS  é è â ê à*/}
        <div className=' flex justify-between'>
            <button className='btn text-green-700' onClick={() => onBackClick()}>
                Retour
            </button>
            <button className='btn bg-green-700 rounded-[0.4rem] text-white' onClick={() => onSubmit()}>
                {submitButtonText}
            </button>
        </div>
    </div>
  )
}
