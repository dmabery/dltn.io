/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Meta from "../components/Meta";
import PostListSimple from "../components/PostListSimple";
import Subscribe from "../components/Subscribe";
import { getPosts } from "../lib/service";

export const getStaticProps = async () => {
  const posts = await getPosts();

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
     <div className="bg-white border border-black p-5">
  <Meta
    title="Dalton Mabery is a video editor who reads and writes."
    description="Developer, Video Editor, Writer."
  />
  <div className="flex flex-col divide-y">
    <div className="flex flex-col gap-2 pb-10">
    <p className="text-gray-900 font-sansSerif font-bold text-3xl">Hi, I'm Dalton</p>
      <div className="flex flex-col text-lg gap-3 text-slate-900">
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
          history's most interesting people, ideas, essays, and inventions.
        </p>
        <p>
          Subscribe for new posts and my monthly reading list emails.
        </p>
        <Subscribe />
      </div>
      <p></p>
    </div>
    <div className="taglist flex flex-col py-10">
      <p className="text-gray-600 font-sansSerif mb-5">Topics</p>
    </div>
    <div className="flex flex-col gap-2 py-10">
      <Link href="/writing" className="text-gray-600 hover:text-blue-500 font-sansSerif mb-5 hover:text-blue">Writing</Link>
      <ol>
        {posts.map((post) => (
          <li>
            <PostListSimple
              title={post.title}
              date={post.date}
              slug={`posts/${post.slug}`}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
</div> );
}
