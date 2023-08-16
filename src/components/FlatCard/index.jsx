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
`;
const CardImage = styled.img`
  object-fit: cover;
  border-radius: 0.62rem;
  height: 21.25rem;
  width: 100%;
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
  flatInfos: PropTypes.string,
};

export default FlatCard;
