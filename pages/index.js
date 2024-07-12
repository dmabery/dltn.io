/* eslint-disable react/no-unescaped-entities */
import IndexCallout from "../components/IndexCallout";
import Meta from "../components/Meta";
import PostDisplay from "../components/PostDisplay";
import Sidebar from "../components/Sidebar";
import { getLatestPosts } from "../lib/service";

export const getStaticProps = async () => {
  const posts = await getLatestPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default function Home({ posts }) {
  if (!posts) return <h1>No posts</h1>;
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <Sidebar posts={posts}>
      <IndexCallout />
      <div className="flex flex-col gap-20">
        {posts.map((post) => (
          <PostDisplay
            title={post.title}
            tags={post.tags.edges.map((edge) => edge.node.name)}
            category={post.categories.edges.map((edge) => edge.node.name)}
            description={post.excerpt}
            date={post.date}
            content={post.content}
            image={post.featuredImage}
            slug={post.slug}
            isHomePage={true}
          />
        ))}
      </div>
      </Sidebar>
    </>
  );
}
