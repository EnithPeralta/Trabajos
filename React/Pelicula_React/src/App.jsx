import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import HomePage from './pages/HomePage'; 
import PeliculaPage from './pages/PeliculaPage';
import SeriesPage from './pages/SeriesPage';
import LoginPage from './pages/LoginPage';
import AnimacionPage from './pages/AnimacionPage';
import AventuraPage from './pages/AventuraPage';
import CienciaPage from './pages/CienciaPage';
import ConsumoPage from './pages/ConsumoPage';

function App() {
  const AppRoutes = () => {
    let router = useRoutes([
      {path:"/HomePage" ,element:<HomePage />},
      {path:"/PeliculaPage", element:<PeliculaPage />},
      {path:"/SeriePage", element:<SeriesPage />},
      {path:"/LoginPage", element:<LoginPage />},
      {path:"/AnimacionPage", element:<AnimacionPage />},
      {path:"/AventuraPage", element:<AventuraPage />},
      {path:"/CienciaPage", element:<CienciaPage />},
      {path:"/ConsumoPage",element:<ConsumoPage />}
    ])
    return router;
  }
  return (
    <div className='App'>
      <BrowserRouter>
        <NavComponent />
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}
export default App;



