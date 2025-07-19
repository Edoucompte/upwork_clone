import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginStep1 = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (usernameOrEmail) {
      navigate(`/login/password/${encodeURIComponent(usernameOrEmail)}`);
    }
  };

  return (
   <div className="max-w-md mx-auto my-20 p-10 bg-white  text-black rounded-lg shadow-md flex flex-col gap-4">
  <h2 className="text-2xl font-bold text-center text-green-600">Connexion</h2>

  <input
    type="text"
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
    placeholder="Nom d'utilisateur ou Email"
    value={usernameOrEmail}
    onChange={(e) => setUsernameOrEmail(e.target.value)}
  />

  <button
    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
    onClick={handleNext}
  >
    Continuer
  </button>
</div>

  );
};

export default LoginStep1;
