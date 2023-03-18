import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards.jsx'
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About';
import Landing from './views/Landing.jsx';
import Detail from './views/Detail.jsx'
import Form from './components/Form';

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (characters.find(char => char.id === data.id)) {
          window.alert('El personaje ya existe');
        }
        else if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose(id) {
    setCharacters(
      characters.filter(character => character.id !== id)
    );
  };

  const { pathname } = useLocation();

  return (
    <div className='App' style={{ padding: '25px' }}>
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}>
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
