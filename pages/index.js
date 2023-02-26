/* eslint-disable react/no-unescaped-entities */
import HomePagePostDisplay from "../components/HomePagePostDisplay";
import Meta from "../components/Meta";
import PostList from "../components/PostList";
import Subscribe from "../components/Subscribe";
import { getAllPublishedRaw, getSingleBlogPostBySlug } from "./api/notion";

export const getStaticProps = async () => {
  const data = await getAllPublishedRaw();
  const posts = await Promise.all(
    data
      .slice(0, 5)
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
          ))}
        </div>
        <div className="w-1/4 text-sm">
          <div className="mb-5">
            <p className="mb-2">
              Every Friday, I write a email with five interesting ideas from
              history, science, philosophy, and more. Subscribe below:
            </p>
            <Subscribe />
          </div>
          <div>
            <h5 className="mb-2 font-bold">Recent Posts</h5>
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
      </div>
    </>
  );
}
