import Subheading from "../Typography/Subheading";
import { COLOR, SCREENS } from "../../Theme";
import AdditionalInfo from "../Common/AdditionalInfo";
import styled from "styled-components";
import { postItems } from "./PostItems";
import PostPreview from "./PostPreview";

const StyledPreviewPostContainer = styled.div`
  background-color: ${COLOR.WHITE};
  display: flex;
  flex-direction: column;
`;

const StyledPreviewPostHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const StyledPreviewPostContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 1.5rem;
  @media (max-width: ${SCREENS.SM}) {
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const PostPreviewContainer = (): JSX.Element => {
  return (
    <StyledPreviewPostContainer>
      <StyledPreviewPostHeadingContainer>
        <Subheading color={COLOR.BLACK}>Officia ut</Subheading>
        <AdditionalInfo path={"/#"}>Lorem Ipsum</AdditionalInfo>
      </StyledPreviewPostHeadingContainer>
      <StyledPreviewPostContentContainer>
        {postItems.map((post) => {
          return (
            <PostPreview
              key={post.id}
              title={post.title}
              description={post.description}
              img={post.img}
            ></PostPreview>
          );
        })}
      </StyledPreviewPostContentContainer>
    </StyledPreviewPostContainer>
  );
};
export default PostPreviewContainer;
