import './App.css';
import { Routes, Route, NavLink } from "react-router-dom"; // BrowserRouter used in main.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap';
import ErrorBoundary from './components/ErrorBoundary';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen';
import PostList from './components/PostList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import { useEffect } from 'react';

function App() {
  // Exercise 4
  const postData = async () => {
    const url = 'https://webhook.site/f0af68d5-df3b-43b8-a3fb-2e7b800a096d';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      }),
    };

    const res = await fetch(url, options);
    // const data = await res.json();
    console.log(res);
  };


  return (
    <>
      {/* Exercise 1
      <Navbar expand="lg">
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
            <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
          </Nav>
        </Navbar>
      </Navbar>
      <Routes>
        <Route path='/' element={
          <ErrorBoundary>
          <HomeScreen />
        </ErrorBoundary>
        } />
        <Route path='/profile' element={
          <ErrorBoundary>
          <ProfileScreen />
        </ErrorBoundary>
        } />
        <Route path='/shop' element={
          <ErrorBoundary>
            <ShopScreen />
          </ErrorBoundary>
          } />
      </Routes> */}

      {/* Exercise 2
      <PostList /> */}

      {/* Exercise 3
      <Example1 />
      <Example2 />
      <Example3 /> */}
      
      {/* Exercise 4
      <button onClick={postData}>Press me to post some data</button> */}
    </>
  )
}

export default App;
