import styled from "styled-components";
import { COLOR } from "../../Theme";
import React, { JSX } from "react";

const StyledLayout = styled.div`
  background-color: ${COLOR.BACKGROUND};
  height: 100vh;
  //width: 100vw;
`;

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: ILayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
