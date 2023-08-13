import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import App from './Pages/home/index.jsx';
import GlobalStyle from './utils/style/GlobalStyle.js';
import Logement from './Pages/Logement/index.jsx';
import Apropos from './Pages/A-Propos/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about',
        element: <Apropos />,
      },
      {
        path: '/logement',
        element: <Logement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
