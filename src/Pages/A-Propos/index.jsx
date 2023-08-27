import Banner from '../../components/Banner/index.jsx';
import BannerImg from '../../assets/aProposBanner.jpg';
import { styled } from 'styled-components';
import DropDown from '../../components/DropDown/index.jsx';

const Wrapper = styled.div`
  & .BannerImg {
    width: 100%;
    height: 223px;
    margin: auto;
    object-fit:cover;
    filter: brightness(65%);
    border-radius: 1.5rem;
      @media screen and (max-width: 800px) {
    border-radius: 0.5rem;
  margin-bottom: 115px;
  }
  }
  }
`;

function Apropos() {
  return (
    <Wrapper>
      <Banner>
        <img
          src={BannerImg}
          className="BannerImg"
          alt="Bannière à-propos Kasa"
        />
      </Banner>
      <DropDown
        dropTitle="Fiabilité"
        wrapperContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
      />
      <DropDown
        dropTitle="Respect"
        wrapperContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <DropDown
        dropTitle="Service"
        wrapperContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <DropDown
        dropTitle="Sécurité"
        wrapperContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </Wrapper>
  );
}

export default Apropos;
