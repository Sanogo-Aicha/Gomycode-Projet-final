import react from "react";
import { Link } from "react-router-dom";
import './Movie.css';
const Movie=({movie})=>{
    return(
      <section className="recent-movies">
      <div className="movies-grid">
          <div lassName="movie-card">
            <div className="movie-image-container">
              <img src={movie.image} alt={movie.titre} className="movie-image" />
            </div>
            <div className="movie-content">
              <h3 className="movie-title">{movie.titre}</h3>
              <p className="movie-description">{movie.description}</p>
            </div>
          </div>
      </div>            
      <Link to={`/MoviesListClip/${movie.id}`}><button className="discover-more">Regarder Maintenant</button></Link>
    </section>
    )
}

export default Movie;