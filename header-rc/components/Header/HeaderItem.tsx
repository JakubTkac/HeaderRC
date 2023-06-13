import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT, SCREENS } from "../../Theme";
import { JSX, useState } from "react";
import { IDropdown } from "./HeaderItems";
import Dropdown from "./Dropdown";

const StyledHeaderItem = styled.div<{ isOpened: boolean }>`
  display: flex;
  max-height: 4.5rem;
  color: ${COLOR.GRAY};
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-weight: ${FONT_WEIGHT.BOLDER};
  font-size: ${FONT_SIZE.XL};
  background-color: ${(props) =>
    props.isOpened ? COLOR.BACKGROUND : COLOR.WHITE};
  color: ${(props) => (props.isOpened ? COLOR.BLUE : COLOR.GRAY)};
  border-bottom: ${(props) =>
    props.isOpened ? `5px solid ${COLOR.BLUE}` : "0"};
  &:hover {
    cursor: pointer;
    background-color: ${COLOR.BACKGROUND};
    color: ${COLOR.BLUE};
    border-bottom: 5px solid ${COLOR.BLUE};
  }
  @media (max-width: ${SCREENS.LG}) {
    padding: 1.5rem 0.5rem;
  }
`;

const HeaderItem = ({
  title,
  dropdown,
}: {
  title: string;
  dropdown: IDropdown[];
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <StyledHeaderItem isOpened={open}>{title}</StyledHeaderItem>
      {open && <Dropdown dropdown={dropdown}></Dropdown>}
    </div>
  );
};

export default HeaderItem;
