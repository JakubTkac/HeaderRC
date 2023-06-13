import { IDropdown } from "./HeaderItems";
import { JSX, useState } from "react";
import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../../Theme";
import { FaSortUp, FaSortDown } from "react-icons/fa";

const StyledMobileHeaderItem = styled.div`
  padding: 0.5rem 1.5rem;
  font-weight: ${FONT_WEIGHT.BOLDER};
  font-size: ${FONT_SIZE.XL};
  background-color: ${COLOR.BACKGROUND};
  color: ${COLOR.BLUE};
  border-left: 5px solid ${COLOR.BLACK};
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const MobileHeaderItem = ({
  title,
  dropdown,
}: {
  title: string;
  dropdown: IDropdown[];
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledMobileHeaderItem
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div>
          <span>{title}</span>
          {dropdown.length > 0 && (open ? <FaSortUp /> : <FaSortDown />)}
        </div>
        {/*//TODO: Content with paths*/}
      </StyledMobileHeaderItem>
    </>
  );
};

export default MobileHeaderItem;
