import styled from 'styled-components';
import PropTypes from 'prop-types';

const BannerWrapper = styled.div`
  width: 86%;
  margin: auto;
  margin-block: 40px;
  @media screen and (max-width: 800px) {
    margin-bottom: -96px;
  }
`;

function Banner({ children }) {
  return <BannerWrapper>{children}</BannerWrapper>;
}

Banner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
};
export default Banner;
