import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../../Theme";
import { BiLink } from "react-icons/bi";
import Link from "next/link";

const StyledReference = styled.a<
  Pick<IReference, "backgroundColor" | "borderRadius" | "color">
>`
  all: unset;
  background-color: ${(props) => props.backgroundColor || COLOR.WHITE};
  color: ${(props) => props.color || COLOR.BLUE};
  border-radius: ${(props) => props.borderRadius || "0px"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${FONT_SIZE.M};
  cursor: pointer;
  gap: 10px;
  padding: 0.5rem 1rem;
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
`;

interface IReference {
  path: string;
  title: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

const Reference = ({
  path,
  title,
  backgroundColor,
  color,
  borderRadius,
}: IReference): JSX.Element => {
  return (
    <StyledReference
      backgroundColor={backgroundColor}
      color={color}
      borderRadius={borderRadius}
    >
      <BiLink></BiLink>
      <Link href={path}>{title}</Link>
    </StyledReference>
  );
};

export default Reference;
