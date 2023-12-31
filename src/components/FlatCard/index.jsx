import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/style/colors.js';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.62rem;
  flex-basis: 30%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%);
`;
const CardImage = styled.img`
  object-fit: cover;
  border-radius: 0.62rem;
  width: 100%;
  height:255px;
`;
const CardTitle = styled.h2`
  position: absolute;
  width: 50%;
  left: 15px;
  bottom: 2.5px;
  color: ${colors.secondary};
  font-size: 18px;
  z-index: 1;
`;

function FlatCard({ flatInfos }) {
  return (
    <CardContainer key={flatInfos.id}>
      <Link to={`/logement/${flatInfos.id}`}>
        <CardImage src={flatInfos.cover} alt="image d'un appartement" />
        <CardTitle>{flatInfos.title}</CardTitle>
      </Link>
    </CardContainer>
  );
}
FlatCard.propTypes = {
  flatInfos: PropTypes.object,
};

export default FlatCard;
