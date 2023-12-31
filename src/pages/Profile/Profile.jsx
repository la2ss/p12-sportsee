import { useNavigate } from "react-router-dom";
import NavHeader from "../../components/static/NavHeader";
import NavSideBar from "../../components/static/NavSideBar";
import logo from "../../assets/user_btn.png";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="userSelection-container">
      <NavHeader />
      <NavSideBar />
      <nav className="userSelection">
        <h1 className="userSelection__title">Bienvenue sur SportSee: Choix de l'utilisateur</h1>
        <img
              className="userSelection__list-item__btn"
              src={logo}
              alt="user logo"
            />
        <ul className="userSelection__list">
          {/* Je crée un lien vers la page de l'utilisateur en utilisant le composant Link de React Router */}
          <li
        
            className="userName"
            onClick={() => navigate("/user/12")}
          >
            <span className="userName">Karl</span>

          </li>
          <li
            className="userName"
            onClick={() => navigate("/user/18")}
          >
            <span className="userName">Cecilia</span>

          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Profile;
