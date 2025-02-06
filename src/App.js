import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Accueil from './Pages/Accueils/Accueil';
import MovieList from './Compoments/Movies/MoviesListe/MovieListe';
import Movie from './Compoments/Movies/Movie/Movie';
import MoviesListClip from './Compoments/Movies/MoviesListClip/MoviesListClip';
import Header from './Compoments/Entet/Header/Header';
import About from './Pages/About/About';
import Formulaire from './Compoments/Formulaire/Formulaire';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= { <Accueil/>}></Route>
        <Route path='/MovieListe' element={<MovieList/>}></Route>
        <Route path='/MoviesListClip/:id' element={< MoviesListClip/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Formulaire' element={<Formulaire/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
