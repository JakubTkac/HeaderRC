import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../../Theme";
import { JSX } from "react";

const StyledDescription = styled.p<Partial<IDescription>>`
  font-size: ${(props) => props.fontSize || FONT_SIZE.L};
  font-weight: ${(props) => props.fontWeight || FONT_WEIGHT.REGULAR};
  text-align: center;
  color: ${COLOR.BLACK};
  b {
    font-weight: ${FONT_WEIGHT.BOLDER};
  }
`;

interface IDescription {
  fontSize?: string;
  fontWeight?: number;
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
