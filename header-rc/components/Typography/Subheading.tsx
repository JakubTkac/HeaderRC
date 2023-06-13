import { JSX } from "react";
import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../../Theme";

const StyledSubheading = styled.h2`
  color: ${COLOR.BLUE};
  font-weight: ${FONT_WEIGHT.BOLDEST};
  font-size: ${FONT_SIZE.XXL};
`;
interface ISubheading {
  children: JSX.Element | JSX.Element[] | string;
}

const Subheading = ({ children }: ISubheading): JSX.Element => {
  return <StyledSubheading>{children}</StyledSubheading>;
};

export default Subheading;
