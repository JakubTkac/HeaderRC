import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT, SCREENS } from "../../Theme";
import { JSX } from "react";

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
`;

const StyledHeading = styled.h1`
  font-weight: ${FONT_WEIGHT.REGULAR};
  color: ${COLOR.BLUE};
  font-size: ${FONT_SIZE.XXXXL};
  text-align: center;
  b {
    font-weight: ${FONT_WEIGHT.BOLDEST};
  }
  @media (max-width: ${SCREENS.XS}) {
    font-size: ${FONT_SIZE.XXXL};
  }
`;

interface IHeadingProps {
  children: JSX.Element | JSX.Element[];
}

const Heading = ({ children }: IHeadingProps): JSX.Element => {
  return (
    <StyledHeadingContainer>
      <StyledHeading>{children}</StyledHeading>
    </StyledHeadingContainer>
  );
};

export default Heading;
