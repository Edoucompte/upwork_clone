import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const LoginStep2 = () => {
  const { usernameOrEmail } = useParams();
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/auth/login', {
      email: decodeURIComponent(usernameOrEmail),
      password,
    });

    const { token, user } = response.data.data;

    // Sauvegarder le token dans le localStorage
    localStorage.setItem('token', token);

    // Afficher ou utiliser les infos utilisateur
    console.log("Utilisateur connecté :", user);
     navigate('/dashbord')
  /*   // Redirection selon le rôle
    switch (user.role) {
      case 'freelancer':
        navigate('/dashbord');
        break;
      case 'client':
        navigate('/client/home');
        break;
      default:
        navigate('/');
    } */
  } catch (error) {
    alert('Erreur de connexion : ' + (error.response?.data?.message || error.message));
  }
};


  return (
    <div className="min-h-screen  flex items-center justify-center  px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-black mb-2">Connexion</h2>
        <p className="text-left text-gray-600 mb-4">
          Pour : <span className="font-semibold">{decodeURIComponent(usernameOrEmail)}</span>
        </p>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Mot de passe</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default LoginStep2;
