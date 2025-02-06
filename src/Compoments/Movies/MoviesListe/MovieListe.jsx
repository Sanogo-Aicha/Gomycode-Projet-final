import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; //L'importation de l'icon de recherche
import "./MoviesListe.css"
import Movie from "../Movie/Movie";
import MovieData from "../../../Data/Data-movies";
import Header from "../../Entet/Header/Header";
const MovieList = () => {
  const location = useLocation();
  const { userName, userAge } = location.state || {}; // Récupère les valeurs passées
  const [searchTerm, setSheatem] = useState("");
  const [filteredMoviecards, setFilteredMoviecards] = useState([]);
  useEffect(() => {
    const Movies = MovieData.filter(
      (
        movie //la filtrage selon l'age
      ) => movie.age <= userAge
    );
    setFilteredMoviecards(Movies); // la nouvelle card filtré
  }, [userAge]);
  const handleChange = (e) => {
    let value = e.target.value;
    setSheatem(value);
  };
  return (
    <div>
        <Header/>
        <div className="texte-form">
        <h1>Bienvenue dans notre ListCard</h1>
        <p>
          <h2>{userName}</h2>
        </p>
        </div>
        <div className="movies-container">
        {/* Barre de Recherche */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher un dessin animé..."
            onChange={handleChange}
          />
          <button>
            <FaSearch />
          </button>
        </div>

        {/* Liste des Films */}
        <div className="movies-grid">
          {filteredMoviecards.filter((movie) =>
            movie.titre.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((movie) => (
            <div className="movie-card" >
                <Link to={`/MoviesListClip/${movie.id}`}>
                <Movie movie={movie} />
                </Link>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default MovieList;
