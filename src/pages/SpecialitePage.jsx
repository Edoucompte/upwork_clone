import BottomNavButtons from '../components/BottomNavButtons'
import React, { useState } from 'react'

export default function SpecialitePage() {
  const [selectedCategory, setSelectedCategory] = useState([])
  const categories = [
    'Accounting & Consulting',
    'Admin Support',
    'Custumer Service',
    'Data Science & Analystic',
    'Design & Creative',
    'Engineering & Architecture',
    'IT & Networking',
    'Legal',
    'Sales & Market',
    'Translation',
    'Web, Mobile & Software Dev',
    'Writing'
  ]

  const handlePickCategory = (category) => {
    if(!selectedCategory.includes(category)){
        setSelectedCategory([
            ...selectedCategory,
            category
        ])
    } else {
        removeCategory(category)
    }
  }

  const removeCategory = (category) => {
    const filtredList = selectedCategory.filter( (cat) => {
        return cat !== category
    })
    setSelectedCategory([...filtredList])
  }
  return (
    <>
        
        <main className=' p-4 sm:p-10 md:p-20 bg-white text-black'>
            <div>
                <p className='text-xs'>2/10</p>
                <p className='text-xl sm:text-2xl md:text-4xl my-4 font-medium'>Super, alors quel genre de travail êtes-vous venu faire ici ?</p>
                <p className='text-xs sm:text-xl md:text-2xl'>Ne vous inquiétez pas, vous pouvez modifier votre chois, utltérieurement.</p>
                <hr className='my-8'/>

                {/* pick work categoy here */}
                <div className='flex'>
                    {/* SIDE PART  */}
                    <div className='flex-1/4'>
                        <p className='text-xs mb-10'>Sélectionnez 1 catégorie</p>

                        <ul className="menu rounded-box w-30 sm:w-40 md:w-56 text-[0.5rem] sm:text-xs md:text-lg font-semibold sm:font-normal bg-white text-black">
                            {
                                categories.map( (category, index) => {
                                    return ( 
                                        <li key={index} onClick={() => {handlePickCategory(category)}}>
                                            <a className={ selectedCategory.includes(category)? 'menu-active': ""}>
                                                {category}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* CATEGORIES SELECTIONNEES é è â ê à*/}
                    <div className='flex-14/20 px-2 md:px-10 text-[0.6rem] md:text-xs'>
                        <p className='mb-10'>Sélectionnez maintenant 1 à 3 Spécialité(s)</p>

                        <div className='flex flex-row flex-wrap ml-2 sm:px-3 md:px-10 '>
                            {
                                selectedCategory.map((cat) => {
                                    return (
                                        <div className='p-2 bg-gray-300 m-1 md:m-2 relative rounded-[0.3rem]'>
                                            <span > {cat} </span>
                                            <span className='cursor-pointer text-[0.9rem] text-gray-500 font-bold absolute right-[-3px] top-[-9px]'
                                                onClick={() => removeCategory(cat)}
                                            >x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* LE BAS */}  
            </div>
            <BottomNavButtons
                primaryLabel="Ensuite, ajoutez vos compétences"
                primaryRoute="/competence"
                secondaryLabel="Passer pour l'instant"
                secondaryRoute="/competence"
                step={20}
            /> 
        </main>
    </>
  )
}
