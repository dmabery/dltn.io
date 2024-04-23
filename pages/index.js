/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Meta from "../components/Meta";
import PostListSimple from "../components/PostListSimple";
import Subscribe from "../components/Subscribe";
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
          <div className="flex flex-col divide-y">
      <div className="flex flex-col gap-2 pb-10">
      <p className="text-gray-900 font-sansSerif font-semibold text-2xl">Hi, I'm Dalton</p>
        <div className="flex text-xl flex-col gap-3 text-slate-900">
          <p>
            I'm the digital creator and editor at{" "}
            <a
              className="underline decoration-gray-400 underline-offset-2 hover:no-underline"
              href="https://fs.blog/"
              target="_blank?"
            >
              Farnam Street
            </a>
            .
          </p>
          <p>
            I spend my free time{" "}
            <span className="font-serif text-lg italic">learning</span>,
            <span className="font-serif text-lg italic"> reading</span>, and
            <span className="font-serif text-lg italic"> writing</span> about
            history's most interesting people, ideas, books, essays, and inventions.
          </p>
          <p>
            Subscribe to receive new posts and my monthly reading list in your inbox.
          </p>
          <Subscribe />
        </div>
        <p></p>
      </div>
      <div className="pt-10">
        <p className="text-gray-600 font-sansSerif text-sm mb-5">Essays</p>
        {posts.map((post) => (
          <PostListSimple
            title={post.title}
            tags={post.tags.edges.map((edge) => edge.node.name)}
            description={post.excerpt}
            date={post.date}
            content={post.content}
            image={post.featuredImage}
            slug={`posts/${post.slug}`}
            isHomePage={true}
          />
        ))}
        <p className="text-gray-600 font-sansSerif text-sm mt-5 mb-5">Read more <Link href="/writing">here</Link>.</p>
      </div>
      </div>
    </>
  );
}
