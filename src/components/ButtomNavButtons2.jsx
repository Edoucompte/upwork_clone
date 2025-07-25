import { useNavigate } from "react-router-dom";

const BottomNavButtons2 = ({
  secondaryLabel,
  secondaryRoute,
  primaryLabel,
  primaryRoute,
  step,
  onClick,
}) => {
  const navigate = useNavigate();

  const handlePrimaryClick = async () => {
    if (onClick && primaryRoute) {
      try {
        await onClick(); // attendre que la logique s'exécute
        navigate(primaryRoute);
      } catch (error) {
        console.error("Erreur dans onClick :", error);
      }
    } else if (primaryRoute) {
      navigate(primaryRoute);
    }
  };

  return (
    <div className="mt-44 p-2">
      {/* Barre de progression */}
      <div className="py-5">
        <progress className="progress text-black bg-amber-200 w-full" value={step} max="100"></progress>
      </div>

      <div className="flex justify-between flex-wrap text-[0.6rem] sm:text-xs lg:text-lg my-2">
        {/* Bouton Retour */}
        <button
          type="button"
          className="text-green-600 shadow-xs shadow-gray-200 rounded-lg px-2 sm:px-5 py-2"
          onClick={() => navigate(-1)}
        >
          Retour
        </button>

        {/* Boutons secondaires et primaires */}
        <div className="flex flex-wrap justify-end gap-2">
          {secondaryLabel !== "" && (
            <button
              type="button"
              className="text-green-600 rounded-lg px-2 sm:px-5 py-2"
              onClick={() => navigate(secondaryRoute)}
            >
              {secondaryLabel}
            </button>
          )}

          <button
            type="button"
            className="bg-green-600 text-white rounded-lg px-2 sm:px-5 py-2"
            onClick={handlePrimaryClick}
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNavButtons2;
