import Header from "../../../src/layout/Header/index.jsx";
import colors from "../../utils/style/colors.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import errorImage from "../../assets/404.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   margin-top: 148px;
  color: ${colors.primary};
  & p {
    text-align: center;
    font-size: 2.25rem;
    @media screen and (max-width: 800px) {
      width: 260px;
      height: 52px;
      font-size: 18px;
      line-height: 25.67px;
      margin-bottom: 32px;
      // text-align: center;
    }
  }
  & a {
    font-size: 1.12rem;
    margin-top: 104px;
    color: ${colors.primary};
    text-decoration: underline;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 16.5rem;
  margin-top: 148px;
  margin-bottom: 150px;
  margin-inline: auto;
  background-image: url(${errorImage});
  background-position: center;
  background-repeat: no-repeat;
  object-fit: contain;
  @media screen and (max-width: 800px) {
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
    width: 226px;
    height: 99px;
    margin-top: 96px;
    margin-bottom: 16px;
  }
`;

function Error() {
  return (
    <>
      <Header />
      <MainContainer>
        <ImgContainer></ImgContainer>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </MainContainer>
    </>
  );
}

export default Error;
