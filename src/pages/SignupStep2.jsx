import React, { useState } from 'react'

export default function SignupStep2() {
  const [selectedCategory, setSelectedCategory] = useState([])
  let categories = [
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
        {/* HEADER */}
        <header>
            <nav className=''>
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex">
                        <a className="m-auto btn btn-ghost text-xl font-bold">Upwork-clone</a>
                    </div>
                    {/* 
                        <div className="flex-none">
                            <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
                            </button>
                        </div>
                    */}
                </div> 
            </nav>
        </header>

        {/* CONTENT */}
        <main className='mt-30 p-8 md:p-30'>
            <div>
                <p>2/10</p>
                <p className='text-xl sm:text-2xl md:text-4xl my-4'>Super, alors quelle travail êtes-vous venu faire ici ?</p>
                <p className='text-xs sm:text-xl md:text-2xl'>Ne vous inquiétez pas, vous pouvez modifier votre chois, utltérieurement.</p>
                <hr className='my-8'/>

                {/* pick work categoy here */}
                <div className='flex'>
                    {/* SIDE PART  */}
                    <div className='flex-1/4'>
                        <p className='text-xs mb-10'>Sélectionnez 1 catégorie</p>

                        <ul className="menu bg-base-200 rounded-box w-56">
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

                    {/* LISTE DES CATEGORIES SELECTIONNEES é è â ê à*/}
                    <div className='flex-14/20 px-2 md:px-10'>
                        <p className='text-xs mb-10'>Sélectionnez maintenant 1 à 3 Spécialité(s)</p>

                        <div className=' flex flex-row flex-wrap px-3 md:px-10 text-xs'>
                            {
                                selectedCategory.map((cat) => {
                                    return (
                                        <div className='p-1 bg-gray-400 m-2 relative'>
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

                <div className=' py-5'>
                    <progress className="progress w-full" value="20" max="100"></progress>
                </div>

                {/* BOUTON DU BAS  é è â ê à*/}
                <div className=' flex justify-between'>
                    <button className='btn'>
                        Retour
                    </button>
                    <button className='btn bg-green-700'>
                        Ensuite, ajoutez vos compétences
                    </button>
                </div>
            </div>
        </main>
    </>
  )
}
