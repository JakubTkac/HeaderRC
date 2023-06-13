import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../../Theme";
import React from "react";
import Link from "next/link";

interface IButton {
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  path: string;
  icon?: JSX.Element;
  title: string;
  fontSize?: string;
  height?: string;
}

const StyledButton = styled.button<Partial<IButton>>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height || "4.5rem"};
  border: 1px solid ${COLOR.BLUE};
  background-color: ${(props) => props.backgroundColor || COLOR.WHITE};
  color: ${(props) => props.color || COLOR.BLUE};
  border-radius: ${(props) => props.borderRadius || "0px"};
  font-size: ${(props) => props.fontSize || FONT_SIZE.XL};
  cursor: pointer;
  gap: 10px;
  padding: 0 1.5rem;
  font-weight: ${FONT_WEIGHT.BOLDER};
  a {
    text-decoration: none;
    color: inherit;
    cursor: inherit;
    width: 100%;
  }
  svg {
    font-size: 1.5em;
  }
  &:hover {
    background-color: ${COLOR.BLUE};
    color: ${COLOR.WHITE};
  }
`;

const Button: React.FC<IButton> = ({
  backgroundColor,
  color,
  borderRadius,
  path,
  icon,
  title,
  height,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      borderRadius={borderRadius}
      height={height}
    >
      {icon && icon}
      <Link href={path}>{title}</Link>
    </StyledButton>
  );
};

export default Button;
