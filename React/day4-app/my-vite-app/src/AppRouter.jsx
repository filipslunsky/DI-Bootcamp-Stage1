import Home from './components/Home';
import About from './components/About';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Product from './components/Product';


function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about-me' element={<About/>}/>
        <Route path='/store' element={<Shop/>}/>
        <Route path='/prd/:id' element={<Product/>}/>
        <Route path='*' element={<h2>404 Oppssss... this page does not exist</h2>}/>
      </Routes>
    </>
  )
}

export default App;
