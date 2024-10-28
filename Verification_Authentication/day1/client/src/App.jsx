import './App.css';
import Dashboard from './components/Dashboard';
import LoginRegister from './components/LoginRegister';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Admin from './components/Admin';
import Auth from './components/auth/Auth';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/admin' element={<Auth><Admin /></Auth>} />
        <Route path='/login' element={<LoginRegister mode='Login' />} />
        <Route path='/register' element={<LoginRegister mode='Register' />} />
      </Routes>
    </>
  )
}

export default App
