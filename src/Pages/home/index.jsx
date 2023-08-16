import Banner from '../../components/Banner/index.jsx';
import styled from 'styled-components';
import colors from '../../utils/style/colors.js';
import logements from '../../datas/logements.json';
import FlatCard from '../../components/FlatCard/index.jsx';
import BannerImage from '../../assets/homeBanner.jpg';

const Wrapper = styled.div`
  position: relative;

  & .BannerContainer {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${BannerImage});
    background-position: center;
    background-size: cover;
    filter: brightness(65%);
    border-radius: 1.5rem;
    width: 100%;
    height: 14.5rem;
    margin: auto;
  }
`;

const BannerTitle = styled.p`
  position: absolute;
  z-index: 1;
  color: ${colors.secondary};
  font-size: 48px;
  line-height: 68.45px;
  @media screen and (max-width: 800px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

const MainContainer = styled.div`
  width: 86%;
  margin: auto;
  margin-bottom: 2.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-evenly;
  background: ${colors.greylightBackground};
  border-radius: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media screen and (max-width: 800px) {
    width: 86%;
    display: flex;
    flex-direction: column;
    background: ${colors.secondary};
  }
`;

function Home() {
  return (
    <Wrapper>
      <Banner>
        <img
          src={BannerImage}
          className="BannerContainer"
          alt="Bannière accueil Kasa"
        />
        <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
      </Banner>
      <MainContainer>
        {logements.map((logement) => {
          return <FlatCard flatInfos={logement} key={logement.id} />;
        })}
      </MainContainer>
    </Wrapper>
  );
}

export default Home;
