import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import colors from '../../utils/style/colors.js';

const NavLinkWrapper = styled.nav`
  width: 30%;
  height: 34px;
  left: 931px;
  top: 17px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
  font-size: 24px;

  @media screen and (max-width: 800px) {
    width: 60%;
    height: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-weight:400;
    font-size: 12px;
    line-height: 17.11px;
  }
     @media screen and (min-device-width: 768px) {
  width: 30%;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${colors.primary};
  
  &.active {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <NavLinkWrapper>
      <StyledNavLink to="/">Accueil</StyledNavLink>
      <StyledNavLink to="/about">A Propos</StyledNavLink>
    </NavLinkWrapper>
  );
}

export default Navbar;
