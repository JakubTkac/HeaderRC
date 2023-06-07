import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../../Theme";
import { IDropdown } from "./HeaderItems";
import Link from "next/link";

const StyledDropdown = styled.div`
  background-color: ${COLOR.BACKGROUND};
  height: auto;
  width: 100%;
  position: absolute;
  top: 4.5rem;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: unset;
`;

const StyledDropdownColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 435.5px;
  h3 {
    font-size: ${FONT_SIZE.M};
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLOR.BLACK};
    left: 0;
    top: 0;
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
  &:hover {
    background-color: ${COLOR.DARKER_GRAY};
    a {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  a {
    font-size: ${FONT_SIZE.M};
    font-weight: ${FONT_WEIGHT.REGULAR};
    text-decoration: none;
    color: ${COLOR.GRAY};
  }
`;

const Dropdown = ({ dropdown }: { dropdown: IDropdown[] }) => {
  return (
    <StyledDropdown>
      {dropdown.map((dropdownItem) => {
        return (
          <StyledDropdownColumn key={dropdownItem.title}>
            <h3>{dropdownItem.title}</h3>
            <ul>
              {dropdownItem?.links.map((link) => {
                return (
                  <StyledLink key={link.title}>
                    <Link href={link.path}>{link.title}</Link>
                  </StyledLink>
                );
              })}
            </ul>
          </StyledDropdownColumn>
        );
      })}
    </StyledDropdown>
  );
};

export default Dropdown;
