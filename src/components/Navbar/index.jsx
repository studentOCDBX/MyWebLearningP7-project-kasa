import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import colors from '../../utils/style/colors.js';

const NavLinkWrapper = styled.nav`
  width: 20%;
  height: 34px;
  left: 931px;
  top: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 24px;

  @media screen and (max-width: 800px) {
      width: 70%;
    height: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 17.11px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${colors.primary};
  &:hover {
    /* background: linear-gradient(to top, #863535, #ff6565); */
    box-shadow: -7px 14px 20px -2px rgba(255, 101, 80, 0.35);
  }
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
