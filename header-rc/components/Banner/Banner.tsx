import Heading from "../Heading/Heading";
import BannerContent from "./BannerContent";
import styled from "styled-components";
import { SCREENS } from "../../Theme";

const StyledBannerContainer = styled.div`
  margin-bottom: 3rem;
  @media (max-width: ${SCREENS.XS}) {
    margin-bottom: 1.5rem;
  }
`;

const Banner = () => {
  return (
    <StyledBannerContainer>
      <Heading />
      <BannerContent />
    </StyledBannerContainer>
  );
};

export default Banner;
