import React from 'react'
import "./Banniere.css"
import { Link } from "react-router-dom";
import Categorie from '../Categorie/CategorieList';
export default function Baniere() {
  return (
    <div>

<section className="banner">
      <div className="banner-content">
        <h1>Bienvenue sur <span className="highlight">fincsWorld</span></h1>
        <p>Explorez un univers riche en dessins animés, mangas et aventures captivantes.</p>
        <Link to="/Formulaire" className="cta-button">Regarder Maintenant</Link>
      </div>
    </section>
    <Categorie/>
        <div className="container-image-ronde">
         <div className="container-image"><img src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/fs-cellulo.jpg" alt="" id="image" /></div>
           <div className="container-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-KfFrfo3cBvvasf0hH7EZjyZFebMivykJw&s" alt=""id="image" /></div>
           <div className="container-image"><img src="https://fr.web.img3.acsta.net/img/b3/62/b36216471e71df2ebc1d423c640f4438.jpg" alt="" id="image"/></div>
           <div className="container-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-PZC1N_0ssekqSXywPGIFcP1xnxvkjkaOc0VAVfSTojkQeC1tupbXW8x9d_iNlGsvSQ&usqp=CAU" alt="" id="image"/></div>
           <div className="container-image"><img src="https://www.cinetrafic.fr/images/affiches/fiche/aff_8695020190807110003.jpg" alt="" id="image"/></div>
         <div className="container-image"><img src="https://static.hitek.fr/img/up_m/483705617/avatarlederniermaitredelairnetflix.png" alt="" id="image" /></div>
         <div className="container-image"><img src="https://focus.telerama.fr/2023/12/19/0/1315/3858/2572/1200/0/60/0/724d5df_1703002605740-vice-versa-2-01.jpg" alt="" id="image"/></div>
         </div>
         
    </div>
  )
}
