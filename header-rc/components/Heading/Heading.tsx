import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT, SCREENS } from "../../Theme";

const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  @media (max-width: ${SCREENS.MD}) {
    margin: 3rem 0;
    margin-bottom: 1.5rem;
  }
  h1 {
    color: ${COLOR.BLUE};
    font-size: ${FONT_SIZE.XXXL};
  }
`;

const StyledHeading = styled.h1`
  font-weight: ${FONT_WEIGHT.REGULAR};
`;
const StyledBoldHeading = styled.h1`
  font-weight: ${FONT_WEIGHT.BOLDEST};
`;

const Heading = () => {
  return (
    <StyledHeadingContainer>
      <StyledHeading>Proident anim</StyledHeading>
      <StyledBoldHeading> nor nulla iste.</StyledBoldHeading>
    </StyledHeadingContainer>
  );
};

export default Heading;
