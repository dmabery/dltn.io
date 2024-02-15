/* eslint-disable react/no-unescaped-entities */
import fs from "fs";
import path from "path";
import Meta from "../components/Meta";
import PostBodyContent from "../components/PostBodyContent";
import StreamPostDisplay from "../components/StreamPostDisplay";
import { getPosts } from "../lib/service";

export const getStaticProps = async () => {
  const posts = await getPosts();
  const data = fs.readFileSync(path.join("content", "stream.md"), {
    encoding: "utf8",
  });

  return {
    props: {
      posts: posts.slice(0, 5),
      data,
    },
    revalidate: 60,
  };
};


export default function Stream({ posts, data }) {
  if (!posts) return <h1>No posts</h1>;
  return (
    <>
      <Meta
        title="Stream"
        description="My private public Twitter."
      />
      <PostBodyContent content={data} />
      <div className="flex flex-col gap-10 border-t pt-8">
        {posts.map((post) => (
          <StreamPostDisplay
            title={post.title}
            tags={post.tags.edges.map((edge) => edge.node.name)}
            description={post.excerpt}
            date={post.date}
            content={post.content}
            image={post.featuredImage}
            slug={`stream/${post.slug}`}
            isHomePage={true}
          />
        ))}
      </div>
    </>
  );
}
