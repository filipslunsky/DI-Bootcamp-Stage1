import Shop from './components/Shop';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/prd/:id' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
