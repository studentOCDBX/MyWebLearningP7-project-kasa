import styled from 'styled-components';
import colors from '../../utils/style/colors';
import BannerImage from '../../assets/homeBanner.jpg';
import PropTypes from 'prop-types';

const BannerWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BannerImage});
  background-position: center;
  background-size: cover;
  border-radius: 1.5rem;
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
// const BannerWrapper = styled.div.attrs((props) => props)`
//   background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
//     url("${(props) => props.children.props.image}");
//   background-position: center;
//   background-size: cover;
//   border-radius: 1.5rem;
//   width: 86%;
//   height: 14.5rem;
//   margin: auto;
//   margin-top: 40px;
//   margin-bottom: 2.4rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 0;
// `;


// function Banner({ children }) {
//   return (
//     <BannerWrapper>
//       <BannerTitle>{children}</BannerTitle>
//     </BannerWrapper>
//   );
// }
function Banner({ children }) {
  return <BannerWrapper>{children}</BannerWrapper>;
}

Banner.propTypes = {
  children: PropTypes.string,
};
export default Banner;
