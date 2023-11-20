import styled from "styled-components";
import colors from "../../utils/style/colors.js";
/* eslint-disable react/prop-types */

const Wrapper = styled.div`
  width: 30%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 0.5rem;
   white-space: nowrap;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    height:24px;
    width: 100%;
  }
`;

function Tag({ tagInfo }) {
  return <Wrapper>{tagInfo}</Wrapper>;
}
export default Tag;
