import { useNavigate } from "react-router-dom";

function BottomNavButtons({ 
  primaryLabel, 
  primaryRoute, 
  secondaryLabel, 
  secondaryRoute ,
  step,
}) {
  const navigate = useNavigate();

  return (
    <div className="mt-44">
      {/* Barre noire */}
      <div className="py-5">
         <progress className="progress text-black bg-amber-200 w-full" value={step} max="100"></progress>
      </div>

      {/* Boutons en bas à droite */}
      <div className="flex justify-end gap-2 my-4">
        <button
          type="button"
          className="text-green-500 rounded-2xl px-5 py-2 mb-5"
          onClick={() => navigate(secondaryRoute)}
        >
          {secondaryLabel}
        </button>

        <button
          type="button"
          className="bg-green-500 text-white rounded-2xl px-5 py-2 mb-5"
          onClick={() => navigate(primaryRoute)}
        >
          {primaryLabel}
        </button>
      </div>
    </div>
  );
}

export default BottomNavButtons;
