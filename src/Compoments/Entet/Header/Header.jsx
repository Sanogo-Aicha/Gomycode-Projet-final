import React from "react";
import "./Header.css";
import Categorie from "../../Categorie/Categorie";
import Baniere from "../../Bannier/Baniere";
import Foother from "../Foother/Foother";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
    <header className="header">
        {/* Logo textuel */}
      <div className="logo">
        <Link to="/" className="logo-text">
          FINCS<span className="anim">World</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
      <Link to="/">Accueil</Link>
      </nav>
      <nav className="nav-links">
      <Link to="/Formulaire">Login</Link>
      </nav>
      {/* Catégories */}
      <Categorie />
    </header>
    </div>
  );
}
