import App from '../Pages/home/index.jsx';
import Logement from '../Pages/Logement/index.jsx';
import Apropos from '../Pages/A-Propos/index.jsx';
import Error from '../Pages/Error/index.jsx';
import { createBrowserRouter } from 'react-router-dom';
import HeaderFooterLayout from "../layout/HeaderFooterLayout";

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
                path: '/logement/:id',
                element: <Logement />,
            },
        ],
    },
]);
export default router;