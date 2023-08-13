import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import App from './Pages/home/index.jsx';
import GlobalStyle from './utils/style/GlobalStyle.js';
import Logement from './Pages/Logement/index.jsx';
import Apropos from './Pages/A-Propos/index.jsx';
import Header from './layout/Header/index.jsx';
import Footer from './layout/Footer/index.jsx';
import Error from './Pages/Error/index.jsx';

const HeaderFooterLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default HeaderFooterLayout;

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <Error />,
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
