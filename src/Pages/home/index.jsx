import Banner from '../../components/Banner/index.jsx';
import styled from 'styled-components';
import colors from '../../utils/style/colors.js';
import logements from '../../datas/logements.json';
import FlatCard from '../../components/FlatCard/index.jsx';
import BannerImage from '../../assets/homeBanner.jpg';

const Wrapper = styled.div`
& .BannerContainer {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${BannerImage});
      object-fit:cover;
    filter: brightness(65%);
    border-radius: 1.5rem;
    width: 100%;
    height:233px;
      @media screen and (max-width: 800px) {
    height: 111px;
    border-radius: 0.5rem;
    }    
  }
`;

const BannerTitle = styled.p`
position:relative;
z-index:1;
top:-201px;
left:28%;
  color: ${colors.secondary};
  font-size: 48px;
  line-height: 68.45px;
  @media screen and (max-width: 800px) {
    width:217px;
    height:48px;
    font-size: 24px;
    line-height: 24px;
    top:-104px;
    left:4%;
  }
`;

const MainContainer = styled.div`
  width: 86%;
  margin-inline: auto;
  margin-top: -9%;
  margin-bottom: 2.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
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
