import CompteOption from '../components/signup/CompteOption';
import React, { useState } from 'react'
import { MdOutlineHomeRepairService } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  // choix selectionne
  const [selectedOption, setSelectedOption] = useState(null); 
  const options = ['client', 'freelancer'];
  let navigate = useNavigate()

  // function pour cangement d'option
  const handleChange = (e) =>{
    setSelectedOption(e.target.value)
  }

  //funtion pour soumettre
  const handleApplyClick = () =>{
    navigate('/bienvenue')
  }
  
  return (
    <div>
        
        <main className='pt-16 pb-6 px-10 flex bg-white text-black'>
            <div className="m-auto flex justify-center items-center flex-col">
                {/* Paragraphe */}
                <p className='text-2xl mb-4 text-center'>Join as Client or Freelancer</p>

                {/* les deux coix de creation de compte */}
                <div className="flex justify-between g-3 my-10 w-[430px] h-[160px]">
                    {/* OPtion CLIENT */}
                    <CompteOption text="I'm a Client, hiring for a project"
                        option={options[0]}
                        selectedOption={selectedOption}
                        handleChange={handleChange}
                    >
                        <MdOutlineHomeRepairService size={25}/>
                    </CompteOption>

                    {/* OPTION FREELANCER */}
                    <CompteOption text="I'm Freelancer, looking for work"
                        option={options[1]}
                        selectedOption={selectedOption}
                        handleChange={handleChange}
                    >
                        <RiToolsFill size={25}/>
                    </CompteOption>
                
                </div>


                {/* BOUTON SUBMIT */}
                <button className={`cursor-pointer  my-4 w-[180px] p-2 rounded-xl text-white ${selectedOption ? ' bg-green-700': ' bg-gray-300' }`} 
                    disabled={selectedOption === null}
                    onClick={handleApplyClick}
                >
                    {
                        selectedOption === options[0]? "Apply as a  Client":
                        selectedOption === options[1] ? "Apply as a Freelancer" : 
                        "Create an account"
                    }
                </button>

                <p className=''>
                    {`Already have an account? `}
                    <a href='#' className='underline text-green-700'>Login</a>
                </p>
            </div>
        </main>
    </div>
  )
}
