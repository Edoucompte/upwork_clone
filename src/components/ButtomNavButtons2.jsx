import { useNavigate } from "react-router-dom";

const  BottomNavButtons2=({ 
  secondaryLabel, 
  secondaryRoute ,
  primaryLabel, 
  primaryRoute, 
  step,
})=> {
  const navigate = useNavigate();

  return (
    <div className="mt-44 p-2">
      {/* Barre noire */}
      <div className="py-5">
         <progress className="progress text-black bg-amber-200 w-full" value={step} max="10"></progress>
      </div>

      <div className=" flex justify-between flex-wrap text-[0.6rem] sm:text-xs  lg:text-lg my-2">
        {/* Bouton Retour */}
        <button
          type="button"
          className="text-green-600 shadow-xs shadow-gray-200 rounded-lg px-2 sm:px-5 py-2"
          onClick={() => navigate(-1)}
        >
          Retour
        </button>

        {/* Boutons en bas à droite */}
        <div className=" flex flex-wrap justify-end gap-2">
        {secondaryLabel!="" && 
          <button
            type="button"
            className="text-green-600 rounded-lg px-2  sm:px-5 py-2"
            onClick={() => navigate(secondaryRoute)}
          >
            {secondaryLabel}
          </button>} 

          <button
            type="button"
            className="bg-green-600 text-white rounded-lg px-2  sm:px-5 py-2"
            onClick={() => navigate(primaryRoute)}
          >
            {primaryLabel}
          </button>
        </div>
      </div>

    </div>
  );
}

export default BottomNavButtons2;