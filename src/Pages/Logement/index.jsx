import { useParams } from "react-router";
import logementInfos from "../../datas/logements.json";
import styled from 'styled-components';
import Carousel from '../../components/Carousel/index.jsx';
import DropDown from '../../components/DropDown/index.jsx';
import colors from "../../utils/style/colors.js";
import StarActive from "../../assets/star-active.png";
import StarInActive from "../../assets/star-inactive.png";
import Tag from "../../components/Tag/index.jsx";

const MainWrapper = styled.div`
    width: 86%;
    margin: auto;
    display: flex;
    flex-direction: column;
   
`;
const TitleContainer = styled.div`
  width:100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
     @media screen and (max-width: 800px) {
    width:100vw;
    display: flex;
     flex-direction: column;
    }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LeftTitleContainer = styled.div`
  color: ${colors.primary};

  h1 {
    margin-bottom: 0;
    font-weight: 500;
    font-size: 36px;
  }
  p {
    margin-top: 0.5rem;
  }
`;
const LeftTagsContainer = styled.nav`
  color: ${colors.secondary};
  width: 60%;
  display: flex;
  gap: 1rem;
  font-size: 12px;
  line-height: 19.96px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HostDetails = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  color: ${colors.primary};
  margin-top: 1rem;
  & p {
    width: 30%;
  }
`;
const HostPhotoContainer = styled.div`
  img {
    box-shadow: rgba(149 157 165 /20%) 0px 8px 24px;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const HostRating = styled.div`
  display: flex;
  width: 12rem;
  height: 1.5rem;
`;
const FlatInfos = styled.div`
  width: 77.5rem;
  display: flex;
  flex-basis: 50%;
  gap: 4rem;
  & ul {
    margin-top:0px;
    margin-bottom:0px;
  }
   @media screen and (max-width: 800px) {
    width:100vw;
     display: flex;
     flex-direction: column;
    }
`;

function Logement() {
  const { id } = useParams();
  const apartment = logementInfos.find((e) => e.id === id);
  const range = [1, 2, 3, 4, 5];
  return (
    <MainWrapper>
      <Carousel pictures={apartment.pictures} />
      <TitleContainer>
        <LeftContainer>
          <LeftTitleContainer>
            <h1>{apartment.title}</h1>
            <p>{apartment.location}</p>
          </LeftTitleContainer>
          <LeftTagsContainer>
            {apartment.tags.map((info, index) => {
              return <Tag tagInfo={info} key={index} />;
            })}
          </LeftTagsContainer>
        </LeftContainer>
        <RightContainer>
          <HostDetails>
            <HostPhotoContainer>
              <img src={apartment.host.picture} alt="owner image" />
            </HostPhotoContainer>
            <p>{apartment.host.name}</p>
          </HostDetails>
          <HostRating>
            {range.map((num) => (
              <div key={num}>
                {apartment.rating >= num ? (
                  <img src={StarActive} alt="active rating star" />
                ) : (
                  <img src={StarInActive} alt="active rating star" />
                )}
              </div>
            ))}
          </HostRating>
        </RightContainer>
      </TitleContainer>
      <FlatInfos>
        <DropDown dropTitle="description" Content={apartment.description} type="text" />
        <DropDown dropTitle="equipements" Content={apartment.equipments.map((element, index) => (
          <ul key={index}>
            <li>{element}</li>
          </ul>
        ))} />
      </FlatInfos>
    </MainWrapper>
  );
}

export default Logement;
