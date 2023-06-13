import { JSX } from "react";
import styled from "styled-components";
import { COLOR, SCREENS } from "../../Theme";

const StyledMain = styled.main`
  background-color: ${COLOR.BACKGROUND};
  margin: 0 15rem;
  @media (max-width: ${SCREENS.LG}) {
    margin: 0 12.5rem;
  }
  @media (max-width: ${SCREENS.L}) {
    margin: 0 8.5rem;
  }
  @media (max-width: ${SCREENS.MD}) {
    margin: 0 1.5rem;
  }
  @media (max-width: ${SCREENS.XS}) {
    margin: 0;
  }
`;

interface IMainProps {
  children: JSX.Element | JSX.Element[];
}

const Main = ({ children }: IMainProps) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
