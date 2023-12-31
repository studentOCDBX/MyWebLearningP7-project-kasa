import styled from 'styled-components';
import logo from '../../assets/FooterLogo.png';
import colors from '../../utils/style/colors.js';

const FooterContainer = styled.div`
  height: 209px;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${colors.footerBackground};
  & p {
    color: #fff;
  }
    @media screen and (max-width: 800px) {
    width: 100vw;
  
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="Logo du footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  );
}

export default Footer;
