import styled from 'styled-components';
import PropTypes from 'prop-types';

const BannerWrapper = styled.div`
  width: 86%;
  height: 14.5rem;
  margin: auto;
  margin-block: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  @media screen and (max-width: 800px) {
    margin-bottom: 4px;
  }
`;

function Banner({ children }) {
  return <BannerWrapper>{children}</BannerWrapper>;
}

Banner.propTypes = {
  children: PropTypes.string,
};
export default Banner;
