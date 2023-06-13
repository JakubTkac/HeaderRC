import styled from "styled-components";
import { COLOR } from "../../Theme";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import MobileNavigation from "./MobileNavigation";

const StyledMobileButton = styled.div`
  z-index: 100;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.BLUE};
  svg {
    height: 100%;
    width: 100%;
    font-size: 4rem;
    &:hover {
      color: ${COLOR.GRAY};
      cursor: pointer;
    }
  }
`;

const MobileButton = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <StyledMobileButton
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <IoClose /> : <IoMenu />}
      </StyledMobileButton>
      {open && <MobileNavigation></MobileNavigation>}
    </div>
  );
};

export default MobileButton;
