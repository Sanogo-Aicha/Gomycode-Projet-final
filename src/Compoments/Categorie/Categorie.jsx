import React from 'react'
import { Link } from 'react-router-dom'
import './Categorie.css'
const Categorie =()=> {
 
    return (
    <>
      <div className="categorie">
      <select name="anime">
        <option value="comedy">Comédie</option>
        <option value="adventure">Aventure</option>
        <option value="fantasy">Fantastique/Fantasy</option>
        <option value="sci-fi">Science-Fiction</option>
        <option value="drama">Drame</option>
        <option value="horror">Horreur</option>
      </select>
    </div>
      </>
    )
  }

  export default Categorie;