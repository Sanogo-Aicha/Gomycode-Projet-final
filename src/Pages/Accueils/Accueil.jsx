import React from 'react'
import Header from '../../Compoments/Entet/Header/Header';
import Baniere from '../../Compoments/Bannier/Baniere';
import Foother from '../../Compoments/Entet/Foother/Foother';
import RecentMovies from '../../Compoments/Movies/RecentMovies/RecentMovie';
const Accueil=()=>  {
  
    return (
      <div>
       <Header/>
        <Baniere/>
        <RecentMovies/>
        <Foother/>
      </div>
    )
 
}
export default Accueil;