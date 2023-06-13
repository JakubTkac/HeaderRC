import styled from "styled-components";
import { headerItems, IHeaderItems } from "./HeaderItems";
import MobileHeaderItem from "./MobileHeaderItem";

const StyledMobileNavigation = styled.nav`
  display: flex;
  width: 100%;
  position: absolute;
  top: 7.5rem;
  left: 0;
  flex-direction: column;
`;

const MobileNavigation = (): JSX.Element => {
  return (
    <>
      <StyledMobileNavigation>
        {headerItems.map((item: IHeaderItems) => {
          return (
            <MobileHeaderItem
              key={item.id}
              title={item.title}
              dropdown={item?.dropdown || []}
            />
          );
        })}
      </StyledMobileNavigation>
    </>
  );
};

export default MobileNavigation;
