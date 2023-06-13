import Image from "next/image";
import Description from "../Typography/Description";
import Button from "../Common/Button";
import styled from "styled-components";
import { COLOR, SCREENS } from "../../Theme";
import { BiLink } from "react-icons/bi";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

const StyledPostPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 23%;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  background-color: ${COLOR.BACKGROUND};
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY};
    button {
      color: ${COLOR.WHITE};
      background-color: ${COLOR.BLUE};
    }
  }
  @media (max-width: ${SCREENS.XL}) {
    width: 30%;
  }
  @media (max-width: ${SCREENS.L}) {
    width: 45%;
  }
  @media (max-width: ${SCREENS.SM}) {
    width: 100%;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

type PostPreviewProps = {
  title: string;
  description: string;
  img: string;
};

const PostPreview = ({
  title,
  description,
  img,
}: PostPreviewProps): JSX.Element => {
  return (
    <StyledPostPreview>
      <AspectRatio.Root ratio={16 / 9}>
        <Img src={img} alt={title} />
      </AspectRatio.Root>

      <Description>{description}</Description>
      <Button
        path={"/#"}
        title={title}
        icon={<BiLink />}
        height={"3.75rem"}
      ></Button>
    </StyledPostPreview>
  );
};

export default PostPreview;
