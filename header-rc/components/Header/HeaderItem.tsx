import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../../Theme";
import { useState } from "react";
import { IDropdown } from "./HeaderItems";
import Dropdown from "./Dropdown";

const StyledHeaderItem = styled.div`
  display: flex;
  max-height: 4.5rem;
  color: ${COLOR.GRAY};
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: ${FONT_SIZE.XL};
  &:hover {
    cursor: pointer;
    background-color: ${COLOR.BACKGROUND};
    color: ${COLOR.BLUE};
    border-bottom: 5px solid ${COLOR.BLUE};
  }
`;

const HeaderItem = ({
  title,
  dropdown,
}: {
  title: string;
  dropdown: IDropdown[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledHeaderItem
        onMouseEnter={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
      >
        {title}
        {open && <Dropdown dropdown={dropdown}></Dropdown>}
      </StyledHeaderItem>
    </>
  );
};

export default HeaderItem;
