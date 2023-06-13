import styled from "styled-components";
import Reference from "../Common/Reference";
import { COLOR } from "../../Theme";
import Description from "../Typography/Description";
import Subheading from "../Typography/Subheading";

const StyledHeroImg = styled.div`
  overflow: hidden;
  background-image: ${(props) => `url(${props.img})`};
  min-height: 200px;
  width: 100%;
  background-size: cover;
  position: relative;
  background-position: 50% 50%;
`;

const StyledLinkContainer = styled.div`
  padding: 1rem 0;
  background-color: ${COLOR.WHITE};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const Hero = (): JSX.Element => {
  return (
    <>
      <div>
        <StyledHeroImg img={"/Hero.png"}></StyledHeroImg>
        <StyledLinkContainer>
          <Reference title={"Ipsum Lorem"} path={"/#"}></Reference>
          <Reference title={"Ipsum Lorem"} path={"/#"}></Reference>
          <Reference title={"Ipsum Lorem"} path={"/#"}></Reference>
        </StyledLinkContainer>
      </div>
      <div>
        <div>
          <Description>
            Numquam. <b>Esse aliquip do, magni.</b>
          </Description>
          <Subheading>Minima ad for vitae sit</Subheading>
        </div>
        <div>
          <StyledHeroImg img={"/Subhero.png"}></StyledHeroImg>
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
