import Heading from "../Typography/Heading";
import BannerContent from "./BannerContent";
import styled from "styled-components";
import { SCREENS } from "../../Theme";

const StyledBannerContainer = styled.div`
  margin-bottom: 3rem;
  @media (max-width: ${SCREENS.XS}) {
    margin-bottom: 1.5rem;
  }
`;

const Banner = (): JSX.Element => {
  return (
    <StyledBannerContainer>
      <Heading>
        Proident anim <b>nor nulla iste.</b>
      </Heading>
      <BannerContent />
    </StyledBannerContainer>
  );
};

export default Banner;
