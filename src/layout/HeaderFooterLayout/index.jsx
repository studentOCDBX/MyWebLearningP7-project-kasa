import Header from '../Header/index';
import Footer from '../Footer/index';
import { Outlet } from 'react-router-dom';


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