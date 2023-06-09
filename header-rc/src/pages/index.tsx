import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Main from "../../components/Layout/Main";
import Hero from "../../components/Hero/Hero";
import PostPreviewContainer from "../../components/Post/PostPreviewContainer";

export default function Home() {
  return (
    <>
      <Layout>
        <Header></Header>
        <Main>
          <Banner></Banner>
          <Hero></Hero>
          <PostPreviewContainer></PostPreviewContainer>
        </Main>
      </Layout>
    </>
  );
}
