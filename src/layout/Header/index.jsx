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
  @media screen and (max-width: 800px) {
    display: flex;
    width: 85%;
    margin-bottom: -22px;
    padding-inline: 30px;
  }
`;

const LogoContainer = styled.div`
  width: 211px;
  height: 68px;
  background-image: url(${LOGO});
  @media screen and (max-width: 800px) {
    width: 145px;
    height: 47px;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoContainer></LogoContainer>
      </Link>
      <Navbar />
    </HeaderWrapper>
  );
}

export default Header;
