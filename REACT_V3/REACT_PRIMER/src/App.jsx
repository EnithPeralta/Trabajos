// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Buttoncom from './components/ButtonCom'
import FormComponent from './components/FormComponent'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NewCompoment from './components/NewCompoment';
import KidsPage from './pages/KidsPage';
import GirlsPage from './pages/GirlsPage';
import AdultsPage from './pages/AdultsPage';
import ProfilePage from './pages/ProfilePage';
import EditPage from './pages/EditPage';
import UsagePage from './pages/UsagePage';
import PerfilPage from './pages/PerfilPage';
import SettingPage from './pages/SettingPage';

function App() {
  const AppRoutes = () => {
    let router = useRoutes([
      { path: '/RegisterPage', element: <RegisterPage /> },
      { path: 'FormComponent', element: <RegisterPage /> },
      { path: '/HomePage', element: <HomePage /> },
      { path: '/KidsPage', element: <KidsPage /> },
      { path: '/GirlsPage', element: <GirlsPage /> },
      { path: '/AdultsPage', element: <AdultsPage /> },
      { path: '/CartPage', element: <CartPage /> },
      { path: '/ProfilePage', element: <ProfilePage /> },
      {path:'/EditPage',element:<EditPage/>},
      { path: '/UsagePage', element: <UsagePage/>},
      { path: '/PerfilPage', element: <PerfilPage /> },
      { path: '/SettingPage', element: <SettingPage /> }
    ])
    return router;
  }
  return (
    <div className='App'>
      <BrowserRouter>
        <NewCompoment />
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}
export default App
