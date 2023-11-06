// J'utilise le hook useLocation pour récupérer le message d'erreur dans le state
import { Link } from 'react-router-dom';
import React  from "react";

const Community = () => {
 

  return (
    <main className="error-404">
    <h1>Page communauté</h1>

      <Link to="/" className="error-404__link">
        Retourner sur la page d’accueil.
      </Link>
    </main>
  );
};

export default Community;