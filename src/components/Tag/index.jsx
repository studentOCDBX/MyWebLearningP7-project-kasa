import styled from "styled-components";
import colors from "../../utils/style/colors.js";
/* eslint-disable react/prop-types */

const Wrapper = styled.div`
  width: 11.5rem;
  height: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 0.7rem;
  margin-bottom: 1.5rem;
`;

function Tag({ tagInfo }) {
  return <Wrapper>{tagInfo}</Wrapper>;
}
export default Tag;
