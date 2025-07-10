import SignupFooter from '../components/signup/SignupFooter';
import TypeTravailCheckBox from '../components/signup/TypeTravailCheckBox'
import { useState } from 'react'
import computer from '../assets/computer.png'
import hand from '../assets/handMoney.jpeg'
import behind from '../assets/behind.jpeg'
import BottomNavButtons from '../components/BottomNavButtons';

export default function TypeTravailPage() {
  const [selectedOptions, setSelectedOptions] = useState([])
  const handleChange = (selected) => {
    console.log(selected, selectedOptions);
    
    if(selectedOptions.includes(selected)){
        const filtered = selectedOptions.filter((op) => op !== selected)
        setSelectedOptions(filtered)
        return
    }
    setSelectedOptions([selected, ...selectedOptions])
  }

  return (
    <div className='p-2 px-30 bg-white min-h-screen text-black'>
        <p>3/3</p>
        <h1 className='text-2xl md:text-4xl my-3 font-medium'>
            Et comment aimeriez-vous travailler?
        </h1>

        <p className='my-8 text-xs md:text-lg'>
            Chacun travaille différemment, c'est pourquoi nous avons différentes façons
            de vous aider à décrocher des contrats. Vous pourvez sélectionner plusieurs 
            préférences dès maintenant et les modifier ultérieurement !
        </p>
    
        {/* CHOIX é à è ê â ô*/}
        <div className='flex gap-4'>
            {/* CHOIX 1 : publications des clients é à è ê â ô*/}
            <TypeTravailCheckBox title="J'aimerais trouver des opportunités moi-même"
                text="Les clients publient des offres d'emploi sur notre talent Marketplace; vous pouvez
                les parcourrir et soumissionner pour eux, ou être invité par uin client."
                option={'1'} selectedOptions={selectedOptions} handleChange={handleChange} 
                image={
                    <div className='relative'>
                        <img src={computer} className='w-30 h-25'/>
                        <img src={hand} className='w-6 h-20 absolute bottom-[-15px] right-7 rotate-[-90deg]'/>
                    </div>
                }/>

            {/* CHOIX 2 : import des taffs perso é à è ê â ô*/}
            <TypeTravailCheckBox title="J'aimerais emballer mon travail pour que les clients puissent l'acheter"
                text="Définissez votre service avec des prix : nous le repertorierons dans notre catalogue 
                des projets  pour que les clients puissent l'acheter immédiatemment."
                option={'2'} selectedOptions={selectedOptions} handleChange={handleChange} 
                image={<img src={behind} className='w-30 h-25'/>}/>
        </div> 

        {/* CHOIX 3 : embauche é à è ê â ô*/}
        <div className='mt-2'>
            <label className='p-4 flex gap-2' htmlFor='embauche'>
                <input id='embauche' type="checkbox" name="type-travail" 
                  className="checkbox checkbox-success" value={'3'}
                  checked={selectedOptions.includes('3')}
                  onChange={ (e) => handleChange(e.target.value)} />
                  <p className='text-xs'>
                    <span className="font-medium">Je suis ouvert aux opportunités de contrats d'embauche </span>
                    - Commencez par un contrat, puis explorez une option à temps plein avec le client.
                </p>
            </label>
        </div> 

       <BottomNavButtons
        primaryLabel="Ensuite, créer un profil"
        primaryRoute="/debut-profil"
        secondaryLabel="Passer pour l'instant"
        secondaryRoute="/debut-profil"
        step={100}
      />      
    </div>
  )
}
