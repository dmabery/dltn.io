/* eslint-disable react/no-unescaped-entities */
import HomePagePostDisplay from "../components/HomePagePostDisplay";
import Meta from "../components/Meta";
import { getAllPublished, getSingleBlogPostBySlug } from "./api/notion";

export const getStaticProps = async () => {
  const posts = await getAllPublished();
  const data = await getSingleBlogPostBySlug(posts[0].slug);
  return {
    props: {
      post: data,
    },
    revalidate: 60,
  };
};

export default function Home({ post, tags }) {
  if (!post) return <h1>No posts</h1>;
  console.log(post);
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <HomePagePostDisplay
        title={post.metadata.title}
        tags={post.metadata.tags}
        description={post.metadata.description}
        date={post.metadata.date}
        content={post.markdown}
        image={post.metadata.image}
        slug={post.metadata.slug}
      />
    </>
  );
}
