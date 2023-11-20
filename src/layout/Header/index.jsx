import Navbar from '../../components/Navbar';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/LOGO.png';

const HeaderWrapper = styled.div`
  width: 86%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.5rem;
  padding-inline: 5.25rem;
  & a {
    width:50%;
     @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    }
     @media screen and (min-device-width: 768px) {
      justify-content: flex-start;
  }
  }
  @media screen and (max-width: 800px) {
    display: flex;
    gap:1rem;
    justify-content:space-between;
    align-items: center;
    padding-inline: 30px;
    margin-bottom: -32px;
  }
 
`;

const LogoContainer = styled.div`
& img{

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 47px;  
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoContainer>
          <img src={LOGO} alt="logo image" />
        </LogoContainer>
      </Link>
      <Navbar />
    </HeaderWrapper>
  );
}

export default Header;
