/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Meta from "../components/Meta";
import PostListSimple from "../components/PostListSimple";
import Subscribe from "../components/Subscribe";
import { getAllPosts, getTags } from "../lib/getPosts";

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const tags = await getTags();

  return {
    props: { posts, tags },
  }};

export default function Home({ posts, tags }) {
  if (!posts) return <h1>No posts</h1>;
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <div className="flex flex-col divide-y">
        <div className="flex flex-col gap-2 pb-10">
        <p className="text-gray-900 text-xl">Hi, I'm Dalton</p>
          <div className="flex flex-col gap-3 text-slate-900">
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
              Every Friday, I share insights about life and seven things I
              learned, read, listened to, or thought were interesting that week.
              Subscribe below.
            </p>
            <Subscribe />
          </div>
          <p></p>
        </div>
        <div className="taglist flex flex-col py-10">
          <p className="text-gray-600 mb-5">Topics</p>
          <div>
            {tags.map((tag) => (
              <li className="inline mb-2 font-sansSerif text-slate-900" key={tag}>
                <Link
                  href={`/tags/${tag}`}
                >
                  <a className="underline hover:text-blue">{tag}</a>
                </Link>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 py-10">
          <Link href="/writing"><a className="text-gray-600 mb-5 hover:text-blue">Writing</a></Link>
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
          <div className="py-5">
            Read more{" "}
            <Link className="underline hover:no-underline" href="/writing">
              here
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
}
