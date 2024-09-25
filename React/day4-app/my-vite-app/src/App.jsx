import Home from './components/Home';
import About from './components/About';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Product from './components/Product';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

const Root = () => {
  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,

      },
      {
        path: '/about-me',
        element: <About />
      },
      {
        path: '/store',
        element: <Shop />
      },
      {
        path: 'prd/:id',
        element: <Product />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
