import './App.css';
import { Route, Routes } from 'react-router-dom';
import Accueil from './Pages/Accueils/Accueil';
import MovieList from './Compoments/Movies/MoviesListe/MovieListe';
import MoviesListClip from './Compoments/Movies/MoviesListClip/MoviesListClip';
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
