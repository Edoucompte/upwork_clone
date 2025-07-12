import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const CustomCard = ({ onDelete }) => {
  return (
    <div className="relative w-full h-56 bg-green-700 shadow-lg mx-auto rounded-lg py-6 px-10 flex justify-between items-center flex-wrap">
      
      {/* Bouton de suppression en haut à droite */}
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-red-700 transition"
      >
        x
      </button>

      {/* Partie gauche */}
      <div className="flex flex-col space-y-5 max-w-2/3">
        <h2 className="text-2xl font-semibold text-white">Show client your know your stuff</h2>
        <p className="text-white text-xl">Head to Credly to import your existing Credly certifications or start earning new ones.</p>
        <button className="bg-white max-w-60 text-black py-1 px-3 rounded-sm hover:bg-teal-100/90 transition">
          Sign in to Credly
        </button>
      </div>

      {/* Partie droite */}
      <div className="flex gap-4 items-center pe-10 max-w-1/3">
        <h1 className="text-4xl font-bold text-amber-600">Credly</h1>
        <FaCertificate className="text-orange-400 text-6xl mt-2 me-5" />
      </div>
    </div>
  );
};

export default CustomCard;
