import React, { useState, useEffect } from 'react';
import { FaEdit, FaShareAlt } from 'react-icons/fa';

const UserProfileCard = () => {
  const [time, setTime] = useState('');

  // Fonction pour mettre à jour l'heure
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const heure = now.toLocaleTimeString();
      setTime(heure);
    };

    updateTime(); // initiale
    const interval = setInterval(updateTime, 1000); // mise à jour chaque seconde

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  bg-white shadow-lg rounded-lg p-6 flex justify-between items-center flex-wrap gap-4">
      
      {/* Partie gauche */}
      <div className="flex items-center gap-4">
        {/* Image + bouton éditer */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 bg-black rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700 transition">
            <FaEdit />
          </button>
        </div>

        {/* Infos utilisateur */}
        <div className="flex flex-col space-y-1">
          <h2 className="text-xl font-semibold">Mickaël Yassegoungbé</h2>
          <p className="text-gray-600">Cotonou, Bénin</p>
          <p className="text-gray-500 text-sm">{time}</p>
        </div>
      </div>

      {/* Partie droite */}
      <div className="flex flex-col items-end space-y-2">
        <div className="flex gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            See public view
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
            Profil Setting
          </button>
        </div>
        <button className="flex items-center text-blue-600 text-sm hover:underline">
          <FaShareAlt className="mr-1" /> Share
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
