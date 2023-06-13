import styled from "styled-components";
import { COLOR, FONT_SIZE, FONT_WEIGHT, SCREENS } from "../../Theme";
import Button from "../Common/Button";
import { IoMailOutline } from "react-icons/io5";
import { BiLink } from "react-icons/bi";
import { MdOutlinePlace } from "react-icons/md";

const StyledBannerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: ${FONT_SIZE.L};
    font-weight: ${FONT_WEIGHT.BOLDER};
    color: ${COLOR.BLACK};
  }
  @media (max-width: ${SCREENS.MD}) {
    flex-direction: column;
    h3 {
      margin-bottom: 1.5rem;
    }
  }
`;

const StyledBannerLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 17px;
`;

const BannerContent = () => {
  return (
    <StyledBannerContent>
      <h3>Minim modi yet omnis nor quia so minima.</h3>
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
