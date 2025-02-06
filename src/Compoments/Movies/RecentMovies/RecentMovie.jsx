import React from "react";
import "./RecentMovie.css";
import { Link } from "react-router-dom";

const movies = [
  {
    title: "One Piece Film: Red",
    image: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg",
    description: "Luffy et son équipage assistent à un concert légendaire, révélant des secrets inattendus.",
  },
  {
    title: "Demon Slayer: Mugen Train",
    image: "https://a.storyblok.com/f/178900/1064x1596/08c0e10608/demon-slayer-kimetsu-no-yaiba-hashira-training-arc-kv.jpg/m/filters:quality(95)format(webp)",
    description: "Tanjiro et ses amis affrontent un démon redoutable à bord d’un train démoniaque.",
  },
  {
    title: "Blanche Neige",
    image: "https://m.media-amazon.com/images/S/pv-target-images/718d9988a27fa3ac1c8eb0ad951b0e5f59729c67171375ca23c2b11670952223.jpg",
    description: "Blanche-Neige est un conte de fées allemand (conte-type 709 dans la classification Aarne-Thompson)",
  },
];

const RecentMovies = () => {
  return (
    <section className="recent-movies">
      <h2 className="section-title">Films Récents</h2>
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <div className="movie-image-container">
              <img src={movie.image} alt={movie.title} className="movie-image" />
            </div>
            <div className="movie-content">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-description">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentMovies;
