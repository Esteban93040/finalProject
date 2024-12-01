import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/home';
import Login from './Login/Login';
import Graficas from './genrarGraficas/Graficas';
import TablaUsuarios from './TablaUsuarios/TablaUsuarios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/graficos',
    element: <Graficas />,
  },
  {
    path: '/generarusuarios',
    element: <TablaUsuarios />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
