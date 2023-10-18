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
    gap:1rem;
    display: flex;
    justify-content:center;
      align-items: center;
    width: 85%;
    padding-inline: 30px;
  }
`;

// const LogoContainer = styled.div`
//   width: 211px;
//   // width: 50%;
//   height: 68px;
//   background-image: url(${LOGO});
//   @media screen and (max-width: 800px) {
//     // width: 145px;
//     width: 50%;
//     height: 47px;
//     background-repeat: no-repeat;
//     background-size: cover;
//   }
// `;
const LogoContainer = styled.div`
& img{
  width: 100%;
}
  @media screen and (max-width: 800px) {
    width: 80%;
    height: 47px;
    background-repeat: no-repeat;
    background-size: cover;
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
