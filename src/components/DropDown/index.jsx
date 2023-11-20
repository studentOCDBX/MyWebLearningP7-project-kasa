import styled, { keyframes } from 'styled-components';
import colors from '../../utils/style/colors.js';
import PropTypes from 'prop-types';
import arrowUp from '../../assets/arrow_up.png';
import arrowBack from '../../assets/arrow_down.png';
import { useState } from 'react';

const wraperAnimation = keyframes`
0%{
transform:translateY(-100%);
}100%{
transform:translateY(0);
}
`;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  overflow:hidden;
  margin-inline: auto;
  margin-bottom: 2rem;
     @media screen and (max-width: 800px) {
    width:100%;
  }
`;

const DropdownHeader = styled.div`
  border-radius: 0.7rem;
  height: 3rem;
  padding-inline: 1rem;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 25.67px;
    text-transform: capitalize;
        @media screen and (max-width: 800px) {
      font-size: 13px;
      line-height: 18.54px;
    }
  }
   @media screen and (max-width: 800px) {
  border-radius: 0.5rem;
    height:35px;
  }
`;

const DropdownHeader__ChevronContainer = styled.div`
  width: 24px;
  height: 32px;
  cursor: pointer;
`;

const Content__Wrapper = styled.div`
  background-color: ${colors.greylightBackground};
  color: ${colors.primary};
  z-index: -1;
  animation-name: ${wraperAnimation} ;
  animation-duration:1s;
  animation-timing-function:ease-in-out;
    font-weight: 400;
    font-size: 18px;
    line-height: 25.67px;
    padding: 1rem;
    min-height:100%;
      @media screen and (max-width: 800px) {
      font-size: 12px;
      line-height: 17.11px;

  }
`;

function DropDown({ dropTitle, Content }) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [AnimChevron, setAnimChevron] = useState(false);

  const handleClick = () => {
    setIsContentVisible(!isContentVisible);
    setAnimChevron(!AnimChevron)
  };

  return (
    <Wrapper>
      <DropdownHeader>
        <h2>{dropTitle}</h2>
        <DropdownHeader__ChevronContainer
          onClick={handleClick}
        >
          {AnimChevron ? (
            <img src={arrowUp} alt="Chevron Up img" />
          ) : (
            <img src={arrowBack} alt="Chevron Down img" />
          )}
        </DropdownHeader__ChevronContainer>
      </DropdownHeader>
      {isContentVisible && (
        <Content__Wrapper>
          {Content}
        </Content__Wrapper>
      )
      }
    </Wrapper >
  );
}
DropDown.propTypes = {
  dropTitle: PropTypes.string,
  wrapperContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default DropDown;
