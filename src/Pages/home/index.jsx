import Banner from '../../components/Banner/index.jsx';
import styled from 'styled-components';
import colors from '../../utils/style/colors.js';

const BannerTitle = styled.h1`
  z-index: 1;
  color: ${colors.secondary};
  font-size: 48px;
  line-height: 68.45px;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

function Home() {
  return (
    <div>
      <Banner>
        <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
      </Banner>
    </div>
  );
}

export default Home;
