import './App.css';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import Nav from './components/Nav';
import Logo from './components/Logo';
import BeachesComponent from './components/BeachesComponent';
import FoodComponent from './components/FoodComponent';
import BirdsComponent from './components/BirdsComponent';
import MountainComponent from './components/MountainComponent';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <>
      <Logo />
      <Search />
      <Nav />
      <Routes>
        <Route path='/' element={<MountainComponent />} />
        <Route path='/mountain' element={<MountainComponent />} />
        <Route path='/beaches' element={<BeachesComponent />} />
        <Route path='/birds' element={<BirdsComponent />} />
        <Route path='/food' element={<FoodComponent />} />
        <Route path='/search/:input' element={<SearchResult />} />
      </Routes>
    </>
  )
}

export default App;
