import styled from "styled-components";
import { FONT_SIZE, FONT_WEIGHT } from "../../Theme";
import { JSX } from "react";

const StyledDescription = styled.p`
  font-size: ${(props) => props.fontSize || FONT_SIZE.L};
  font-weight: ${(props) => props.fontWeight || FONT_WEIGHT.REGULAR};
  b {
    font-weight: ${FONT_WEIGHT.BOLDER};
  }
`;

interface IDescription {
  fontSize?: string;
  fontWeight?: string;
  children: JSX.Element | JSX.Element[] | string;
}

const Description = ({
  fontSize,
  fontWeight,
  children,
}: IDescription): JSX.Element => {
  return (
    <>
      <StyledDescription fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </StyledDescription>
    </>
  );
};

export default Description;
