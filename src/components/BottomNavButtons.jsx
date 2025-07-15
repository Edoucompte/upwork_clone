import { useNavigate } from "react-router-dom";

function BottomNavButtons({ 
  primaryLabel, 
  primaryRoute, 
  secondaryLabel, 
  secondaryRoute,
  step,
}) {
  const navigate = useNavigate();

  return (
    <div className="mt-44 p-2">
      {/* Barre noire */}
      <div className="py-5">
         <progress className="progress text-black bg-amber-200 w-full" value={step} max="100"></progress>
      </div>

      <div className="flex justify-between flex-wrap">
        {/* Boutons en bas à gauche */}
        <button
          type="button"
          className="text-green-500 border-green-500 border rounded-2xl px-5 py-2 my-8 text-xs lg:text-lg"
          onClick={() => navigate(-1)}
        >
          Retour
        </button>

        {/* Boutons en bas à droite */}
        <div className="flex flex-wrap justify-end gap-2 my-8">
          <button
            type="button"
            className="text-green-500 border-green-500 border rounded-2xl px-5 py-2 text-xs lg:text-lg"
            onClick={() => navigate(secondaryRoute)}
          >
            {secondaryLabel}
          </button>

          <button
            type="button"
            className="bg-green-500 text-white rounded-2xl px-5 py-2 text-xs lg:text-lg"
            onClick={() => navigate(primaryRoute)}
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomNavButtons;
