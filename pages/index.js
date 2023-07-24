/* eslint-disable react/no-unescaped-entities */
import HomePagePostDisplay from "../components/HomePagePostDisplay";
import Meta from "../components/Meta";
import { getAllPublished, getSingleBlogPostBySlug } from "./api/notion";

export const getStaticProps = async () => {
  const posts = await getAllPublished();
  var data = [];
  for (var i = 0; i < 5; i++) {
    data.push(await getSingleBlogPostBySlug(posts[i].slug));
  }
  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

export default function Home({ posts, tags }) {
  if (!posts) return <h1>No posts</h1>;
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <div className="flex flex-col gap-10">
        {posts.map((post) => (
          <HomePagePostDisplay
            title={post.metadata.title}
            tags={post.metadata.tags}
            description={post.metadata.description}
            date={post.metadata.date}
            content={post.markdown}
            image={post.metadata.image}
            slug={post.metadata.slug}
          />
        ))}
      </div>
    </>
  );
}
