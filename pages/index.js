/* eslint-disable react/no-unescaped-entities */
import HomePagePostDisplay from "../components/HomePagePostDisplay";
import Meta from "../components/Meta";
import { getLatestPost } from "../lib/getPosts";

export const getStaticProps = async () => {
  return getLatestPost();
};

export default function Home({ post, tags, content }) {
  if (!post) return <h1>No posts</h1>;
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <div className="flex flex-col gap-10">
        {post.map((post) => (
          <HomePagePostDisplay
            title={post.frontmatter.Title}
            date={post.frontmatter.Date}
            tags={post.frontmatter.Tags}
            description={post.frontmatter.description}
            image={post.frontmatter.image}
            slug={post.frontmatter.Slug}
            content={post.content}
          />
        ))}
      </div>
    </>
  );
}
