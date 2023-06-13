import styled from "styled-components";
import Reference from "../Common/Reference";
import { COLOR, SCREENS } from "../../Theme";
import Description from "../Typography/Description";
import Subheading from "../Typography/Subheading";
import AdditionalInfo from "../Common/AdditionalInfo";

const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  @media (max-width: ${SCREENS.LG}) {
    flex-direction: column;
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
          <StyledHeroImg img={"/Subhero.png"}></StyledHeroImg>
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
