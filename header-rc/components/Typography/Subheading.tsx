import { JSX } from "react";
import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT, SCREENS } from "../../Theme";

const StyledSubheading = styled.h2`
  color: ${(props) => props.color || COLOR.BLUE};
  font-weight: ${FONT_WEIGHT.BOLDEST};
  font-size: ${FONT_SIZE.XXL};
  @media (max-width: ${SCREENS.SM}) {
    text-align: center;
  }
`;
interface ISubheading {
  children: JSX.Element | JSX.Element[] | string;
  color: string;
}

const Subheading = ({ children, color }: ISubheading): JSX.Element => {
  return <StyledSubheading color={color}>{children}</StyledSubheading>;
};

export default Subheading;
