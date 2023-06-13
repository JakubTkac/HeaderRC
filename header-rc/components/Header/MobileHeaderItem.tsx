import { IDropdown } from "./HeaderItems";
import { JSX, useState } from "react";
import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../../Theme";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import Link from "next/link";

const StyledMobileHeaderItem = styled.div`
  padding: 0.5rem 19px;
  font-weight: ${FONT_WEIGHT.BOLDER};
  font-size: ${FONT_SIZE.XL};
  background-color: ${COLOR.BACKGROUND};
  color: ${COLOR.BLUE};
  border-left: 5px solid ${COLOR.BLACK};
  &:hover {
    cursor: pointer;
  }
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

const StyledDropdownList = styled.div`
  background-color: ${COLOR.WHITE};
  width: 100%;
  padding: 0.5rem 0;
  h3 {
    display: flex;
    align-items: center;
    height: 40px;
    padding-left: 1.5rem;
    font-size: ${FONT_SIZE.M};
    font-weight: ${FONT_WEIGHT.BOLDER};
    color: ${COLOR.BLACK};
    box-shadow: 0px 0px 0px 1px #f1f1f1 inset;
  }
  ul {
    font-weight: ${FONT_WEIGHT.REGULAR};
    list-style: none;
  }
`;

const StyledLink = styled.li`
  height: 40px;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0px -1px 0px 0px #f1f1f1 inset;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.DARKER_GRAY};
    a {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  a {
    width: 100%;
    font-size: ${FONT_SIZE.M};
    font-weight: ${FONT_WEIGHT.REGULAR};
    text-decoration: none;
    color: ${COLOR.GRAY};
  }
`;

const StyledLinkWrapper = styled.div`
  width: 100%;
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
      </StyledMobileHeaderItem>
      {open && dropdown.length > 1 && (
        <StyledDropdownList>
          {dropdown.map((dropdownItem) => {
            return (
              <StyledLinkWrapper key={dropdownItem.title}>
                <div>
                  <h3>{dropdownItem.title}</h3>
                </div>
                <ul>
                  {dropdownItem?.links.map((link) => {
                    return (
                      <StyledLink key={link.title}>
                        <Link href={link.path}>{link.title}</Link>
                      </StyledLink>
                    );
                  })}
                </ul>
              </StyledLinkWrapper>
            );
          })}
        </StyledDropdownList>
      )}
    </>
  );
};

export default MobileHeaderItem;
