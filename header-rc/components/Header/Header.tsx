import styled from "styled-components";
import { COLOR, FONT_WEIGHT } from "../../Theme";
import { headerItems, IHeaderItems } from "./HeaderItems";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const StyledHeader = styled.div`
  margin: 0 15rem;
  margin-top: 5px;
  position: relative;
  background-color: ${COLOR.WHITE};
  height: 4.5rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
`;

const StyledHeaderItem = styled.div`
  display: flex;
  color: ${COLOR.GRAY};
  justify-content: center;
  align-items: center;
  padding: 22.5px 1.5rem;
  font-weight: ${FONT_WEIGHT.BOLD};
  &:hover {
    cursor: pointer;
    background-color: ${COLOR.BACKGROUND};
    color: ${COLOR.BLUE};
    border-bottom: 5px solid ${COLOR.BLUE};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Image alt={"logo"} src={"/logo.png"} height={72} width={160}></Image>
      <nav>
        {headerItems.map((item: IHeaderItems) => {
          return (
            <HeaderItem
              key={item.id}
              title={item.title}
              dropdown={item?.dropdown || []}
            />
          );
        })}
      </nav>
    </StyledHeader>
  );
};

export default Header;
