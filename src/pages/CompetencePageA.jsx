import axios from 'axios'
import BottomNavButtons2 from '../components/ButtomNavButtons2'

import { useState } from 'react'

export default function CompetencePageA() {
    const [selectedSkills, setSelectedSkills] = useState([])
  const skills = [
    'Construction Document Preparation',
    'Game Design',
    'Game',
    'Video Game',
    'Product Development',
    'Mobile Development',
    'Clean Architecture',
    'Specification',
  ]
 const userId = 2;
  const handlePickSkills = (skill) => {
    if(!selectedSkills.includes(skill)){
        setSelectedSkills([
            ...selectedSkills,
            skill
        ])
    } else {
        removeSkills(skill)
    }
  }

  const removeSkills = (skill) => {
    const filtredList = selectedSkills.filter( (sk) => {
        return sk !== skill
    })
    setSelectedSkills([...filtredList])
  }

  const handleSubmitCompetences = async () => {
    try {
      // Envoie chaque compétence au backend (boucle sur selectedSkills)
      await Promise.all(
        selectedSkills.map(async (skill) => {
          await axios.post('http://localhost:3000/competence/create', {
            competence: skill,
            compte_id: userId, // remplace par l'id réel du compte utilisateur
          });
        })
      );

      console.log('Compétences enregistrées avec succès');
      // Redirection si souhaité
      // navigate('/register/titre-profil');
    } catch (error) {
      console.error('Erreur lors de l’enregistrement des compétences :', error);
    }
  };
  return (
    <>
        

        {/* CONTENT */}
        <main className='pt-10 p-8 md:p-20 bg-white text-black'>
            <div className='text-xs md:text-[0.90rem]'>
                <p > 3/10</p>
                <p className='text-xl sm:text-2xl md:text-4xl my-4 font-medium'>Vous y êtes presque! Quel travail êtes-vous venu faire ici ?</p>
                <div>
                    <p className='mb-1'>Vos compétences montrent aux clients ce vous pouvez offrir, et nous aide à choisir
                    les travaux à vous recommander.</p>
                    <p>Ajoutez ou supprimez parmi ces suggestions, ou tapez en recherche pour en trouver plus.
                    Faites votre choix. </p>
                </div>

                <p className='py-3 mb-2'><a href="#" className='text-green-700 underline'>En quoi ce choix est-il important? </a></p>

                <p className='py-2'>Vos compétences</p>

                <input type="text" placeholder='Entrez vos compétences ici' className='border-1 p-2 rounded-[0.5rem] w-full border-gray-300'/>
                <p className="text-xs text-right font-light">Max 15 compétences</p>

                {/* SUGGESTIONS é è â ê à */}
                <p className='my-3'>Compétences suggérées</p>
                <div className="flex flex-row flex-wrap">
                    {
                        skills.map( (skill, index) => {
                            return (
                                <p key={index} onClick={() => { handlePickSkills(skill)}}
                                    className="border-1 border-gray-300 rounded-xl px-2 py-1 mx-2 my-1 cursor-pointer"
                                >
                                    <span className='mr-1'> + </span>
                                    <span>{skill}</span>
                                </p>
                            )
                        })
                    }
                </div>

                {/* COMPETENCES SELECTIONNEES é è â ê à*/}
                <div className=' w-full h-20 p-4'>

                    <div className=' flex flex-row flex-wrap text-xs'>
                        {
                            selectedSkills.map((skill) => {
                                return (
                                    <div className='p-2 bg-gray-300 dark:bg-gray-500 m-2 relative rounded-[0.3rem]'>
                                        <span > {skill} </span>
                                        <span className='cursor-pointer text-[0.9rem] text-gray-500 font-bold absolute right-[-3px] top-[-9px]'
                                            onClick={() => removeSkills(skill)}
                                        >x</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
            </div>
            
             <BottomNavButtons2
                primaryLabel="Ensuite, le titre de votre profil"
                primaryRoute="/register/titre-profil"
                secondaryLabel="Passer pour l'instant"
                secondaryRoute="/register/titre-profil"
                step={30}
                onClick={handleSubmitCompetences}
            />   
        </main>
        {/* LE BAS é è â ê à */}
         
                
    </>
  )
}
