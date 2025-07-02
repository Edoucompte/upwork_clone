import React from 'react'

export default function SignupFooter({
    step=1, total=100, 
    submitButtonText, 
    secondaryButtonText= "",
    onBackClick = ()=>{}, 
    onSubmit = ()=>{} 
}) {
  return (
    <div > {/* className="sticky bottom-4 z-100" */}
        <div className=' py-5'>
            <progress className="progress w-full" value={`${step*10}`} max={`${total}`}></progress>
        </div>

        {/* BOUTONS DU BAS  é è â ê à*/}
        <div className=' flex justify-between mx-8'>
            <button className='btn text-green-700' onClick={() => onBackClick()}>
                Retour
            </button>

            <div>
                {
                    secondaryButtonText ?
                        <button className='btn bg-green-700 rounded-[0.4rem] text-white text-xs md:text-[0.9rem]' 
                            onClick={() => {}}
                        >
                            {secondaryButtonText}
                        </button> :
                        null
                }
                <button className='btn bg-green-700 rounded-[0.4rem] text-white text-xs md:text-[0.9rem]' 
                    onClick={() => onSubmit()}
                >
                    {submitButtonText}
                </button>
            </div>
        </div>
    </div>
  )
}
