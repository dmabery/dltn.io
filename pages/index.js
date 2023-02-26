/* eslint-disable react/no-unescaped-entities */
import FullPostDisplay from "../components/FullPostDisplay";
import Meta from "../components/Meta";
import PostList from "../components/PostList";
import { getAllPublishedRaw, getSingleBlogPostBySlug } from "./api/notion";

export const getStaticProps = async () => {
  const data = await getAllPublishedRaw();
  const posts = await Promise.all(
    data
      .slice(0, 4)
      .map(
        async (post) =>
          await getSingleBlogPostBySlug(
            post.properties.Slug.rich_text[0].plain_text
          )
      )
  );
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default function Home({ posts }) {
  if (!posts) return <h1>No posts</h1>;
  console.log(posts);
  return (
    <>
      <Meta
        title="Dalton Mabery"
        description="Developer, Video Editor, Writer."
      />
      <div className="flex flex-col md:flex-row">
        <div className="w-3/4">
          {posts.map((post) => (
            <>
              <FullPostDisplay
                title={post.metadata.title}
                tags={post.metadata.tags}
                description={post.metadata.description}
                date={post.metadata.date}
                content={post.markdown}
                image={post.metadata.image}
              />
            </>
          ))}
        </div>
        <div className="">
          {posts.map((post) => (
            <>
              <PostList
                title={post.metadata.title}
                date={post.metadata.date}
                slug={`/posts/${post.metadata.slug}`}
                key={post.id}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
