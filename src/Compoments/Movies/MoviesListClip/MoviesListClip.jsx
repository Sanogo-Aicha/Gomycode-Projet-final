import React from 'react';
import {  useParams } from 'react-router-dom';
import './MoviesListClip.css';
import MoviesClip from '../MoviesClip/MoviesClip';
import DataMoviesClip from '../../../Data/DataClipMovies';
import Header from '../../Entet/Header/Header';
function MoviesListClip () {
  let id=useParams().id
  let movies=DataMoviesClip.find((elt)=>{
    return elt.id=id;
  })
    return (
      <>
      <Header/>
      <div className='container-movies'>
        <div className='postUrl'>  
              <MoviesClip movie={movies}/>
           </div>
        </div>
        </>
    )
  
}
export default MoviesListClip;