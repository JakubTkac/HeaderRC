import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT, SCREENS } from "../../Theme";
import Button from "../Common/Button";
import { IoMailOutline } from "react-icons/io5";
import { BiLink } from "react-icons/bi";
import { MdOutlinePlace } from "react-icons/md";
import Description from "../Typography/Description";

const StyledBannerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${SCREENS.MD}) {
    flex-direction: column;
    p {
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }
`;

const StyledBannerLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 17px;
  @media (max-width: ${SCREENS.XS}) {
    gap: 16px;
  }
`;

const BannerContent = (): JSX.Element => {
  return (
    <StyledBannerContent>
      {/*<h3>Minim modi yet omnis nor quia so minima.</h3>*/}
      <Description fontWeight={FONT_WEIGHT.BOLDER} fontSize={FONT_SIZE.L}>
        Minim modi yet omnis nor quia so minima.
      </Description>
      <StyledBannerLinks>
        <Button
          path={`/#`}
          title={"Ipsum Lorem"}
          backgroundColor={COLOR.BLUE}
          color={COLOR.WHITE}
          icon={<IoMailOutline />}
        />
        <Button path={`/#`} title={"Ipsum Lorem"} icon={<BiLink />} />
        <Button path={`/#`} title={"Ipsum Lorem"} icon={<MdOutlinePlace />} />
      </StyledBannerLinks>
    </StyledBannerContent>
  );
};

export default BannerContent;
