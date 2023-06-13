import styled from "styled-components";
import { COLOR, FONT_WEIGHT, SCREENS } from "../../Theme";
import { headerItems, IHeaderItems } from "./HeaderItems";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import useBetterMediaQuery from "../../utils/useBetterMediaQuery";
import MobileButton from "./MobileButton";
import { JSX } from "react";

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

  @media (max-width: ${SCREENS.LG}) {
    margin: 0 12.5rem;
    margin-top: 5px;
  }
  @media (max-width: ${SCREENS.L}) {
    margin: 0 8.5rem;
    margin-top: 5px;
  }
  @media (max-width: ${SCREENS.MD}) {
    margin: 0;
    padding: 0 1.5rem;
    background-color: ${COLOR.BLUE};
    height: 7.5rem;
  }
`;

const StyledNavigation = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: ${SCREENS.LG}) {
    gap: 0.5rem;
  }
`;

const StyledLogo = styled(Image)`
  height: 72px;
  width: 160px;
  @media (max-width: ${SCREENS.MD}) {
    height: 72px;
    width: 72px;
    object-fit: cover;
  }
`;

const Header = (): JSX.Element => {
  const isLargerThan768 = useBetterMediaQuery("(min-width: 768px)");
  return (
    <StyledHeader>
      <StyledLogo
        alt={"logo"}
        src={"/logo.png"}
        height={72}
        width={160}
      ></StyledLogo>
      {isLargerThan768 ? (
        <StyledNavigation>
          {headerItems.map((item: IHeaderItems) => {
            return (
              <HeaderItem
                key={item.id}
                title={item.title}
                dropdown={item?.dropdown || []}
              />
            );
          })}
        </StyledNavigation>
      ) : (
        <div>
          <MobileButton></MobileButton>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
