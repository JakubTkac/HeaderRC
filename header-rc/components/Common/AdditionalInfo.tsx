import styled from "styled-components";
import { JSX } from "react";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../../Theme";
import Link from "next/link";

const StyledAdditionalInfo = styled(Link)`
  all: unset;
  text-decoration: underline;
  color: ${COLOR.BLUE};
  font-size: ${FONT_SIZE.L};
  font-weight: ${FONT_WEIGHT.REGULAR};
  cursor: pointer;
`;

interface IAdditionalInfo {
  children: JSX.Element | JSX.Element[] | string;
  path: string;
}

const AdditionalInfo = ({ children, path }: IAdditionalInfo): JSX.Element => {
  return <StyledAdditionalInfo href={path}>{children}</StyledAdditionalInfo>;
};

export default AdditionalInfo;
