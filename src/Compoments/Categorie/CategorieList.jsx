import React from "react";
import "./CategorieList.css";

const categories = [
  { name: "Action", icon: "🔥" },
  { name: "Aventure", icon: "🌍" },
  { name: "Comédie", icon: "😂" },
  { name: "Fantastique", icon: "🐉" },
  { name: "Science-Fiction", icon: "🚀" },
  { name: "Horreur", icon: "👻" },
];

const Categorie = () => {
  return (
    <section className="categorie-section">
      <h2 className="categorie-title">Catégories Populaires</h2>
      <div className="categorie-container">
        {categories.map((category, index) => (
          <div key={index} className="categorie-card">
            <span className="categorie-icon">{category.icon}</span>
            <p className="categorie-name">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categorie;
