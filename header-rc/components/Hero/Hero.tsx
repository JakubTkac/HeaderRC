import styled from "styled-components";
import Reference from "../Common/Reference";
import { COLOR, SCREENS } from "../../Theme";
import Description from "../Typography/Description";
import Subheading from "../Typography/Subheading";
import AdditionalInfo from "../Common/AdditionalInfo";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-bottom: 3rem;
  @media (max-width: ${SCREENS.LG}) {
    flex-direction: column;
  }
  @media (max-width: ${SCREENS.MD}) {
    margin-bottom: 1.5rem;
  }
  @media (max-width: ${SCREENS.XS}) {
    margin-bottom: 0;
  }
`;
const StyledHeroFlex = styled.div`
  flex-basis: 50%;
`;

const StyledHeroImg = styled.div<{ img: string; height?: string }>`
  overflow: hidden;
  background-image: ${(props) => `url(${props.img})`};
  height: ${(props) => props.height || "200px"};
  width: 100%;
  background-size: cover;
  position: relative;
  background-position: 50% 50%;
`;

const StyledSubHeroContentContainer = styled.div`
  display: flex;
  background-color: ${COLOR.WHITE};
  padding: 1.5rem 0;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const StyledLinkContainer = styled.div`
  padding: 1rem 0;
  flex-wrap: wrap;
  background-color: ${COLOR.WHITE};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const StyledAdditionalSubHeroContentContainer = styled.div`
  background-color: ${COLOR.WHITE};
  padding: 1.875rem 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  @media (max-width: ${SCREENS.SM}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Hero = (): JSX.Element => {
  return (
    <StyledHeroContainer>
      <StyledHeroFlex>
        <StyledHeroImg img={"/Hero.png"} height={"400px"}></StyledHeroImg>
        <StyledLinkContainer>
          <Reference title={"Ipsum Lorem"} path={"/#"}></Reference>
          <Reference title={"Ipsum Lorem"} path={"/#"}></Reference>
          <Reference title={"Ipsum Lorem"} path={"/#"}></Reference>
        </StyledLinkContainer>
      </StyledHeroFlex>
      <StyledHeroFlex>
        <StyledSubHeroContentContainer>
          <Description>
            <>
              Numquam. <b>Esse aliquip do, magni.</b>
            </>
          </Description>
          <Subheading color={COLOR.BLUE}>Minima ad for vitae sit</Subheading>
          <AdditionalInfo path={"/#"}>Ipsum Lorem</AdditionalInfo>
        </StyledSubHeroContentContainer>
        <div>
          <StyledImageContainer>
            <Img src="/Subhero.png" alt="subhero" />
          </StyledImageContainer>
          <StyledAdditionalSubHeroContentContainer>
            <Reference
              title={"Ipsum Lorem"}
              path={"/#"}
              backgroundColor={COLOR.BLUE}
              color={COLOR.WHITE}
              borderRadius={"48px"}
            ></Reference>
            <Description>
              Adipisicing unde vel so dolore, consequatur.
            </Description>
            <AdditionalInfo path={"#"}>Ipsum Lorem</AdditionalInfo>
          </StyledAdditionalSubHeroContentContainer>
        </div>
      </StyledHeroFlex>
    </StyledHeroContainer>
  );
};

export default Hero;
