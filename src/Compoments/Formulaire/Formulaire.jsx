import React, { useState} from 'react'
import { useNavigate,} from "react-router-dom";
import Header from '../Entet/Header/Header';
import "./Formulaire.css"
import Footer from '../Entet/Foother/Foother';
const Formulaire =()=>  {
    const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Redirige vers ListCard avec les données
    navigate("/MovieListe", {
      state: { userName, userAge },
    });
  };
    return (
        <>
       <div className='container-form'>
       <div> <Header/></div>
       <div className='rm-form'>
        <em>Remplissez ce formulaire</em>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ENTREZ VOTRE NOM"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="ENTREZ VOTRE AGE"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
          required
        />
        <p></p>
        <button id="button-card" type="submit">
          Cliquez
        </button>
      </form>
    </div>
       <div className='Footer-form'> <Footer/></div>
     </>
     
    )
  }

export default Formulaire;