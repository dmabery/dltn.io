/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Meta from "../components/Meta";
import PostListSimple from "../components/PostListSimple";
import { getAllPosts, getTags } from "../lib/getMarkdownFiles";
import generateRssFeed from "../utils/rss";

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const tags = await getTags();

  generateRssFeed(posts);

  return {
    props: { posts, tags },
  }};

export default function Home({ posts, tags }) {
  if (!posts) return <h1>No posts</h1>;
  return <>
    <Meta
      title="Dalton Mabery is a video editor who reads and writes."
      description="Developer, Video Editor, Writer."
    />
    <div className="flex flex-col divide-y">
      <div className="flex flex-col gap-2 pb-10">
      <p className="font-sansSerif font-semibold text-xl">Hi, I'm Dalton</p>
        <div className="flex flex-col gap-3">
          <p>
            I'm a first year law student in Sacramento.
          </p>
          <p>
            I write about what I learn studying law and reading about history.
          </p>
        </div>
        <p></p>
      </div>
      <div className="taglist flex flex-col py-10">
        <p className="font-sansSerif text-base mb-5">Topics</p>
        <div>
          {tags.map((tag) => (
            <li className="inline mb-2" key={tag}>
              <Link href={`/tags/${tag}`} className="underline decoration-1 hover:text-blue-500">
                {tag}
              </Link>
            </li>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-10">
        <Link href="/writing" className="mb-5 font-sansSerif text-base hover:text-blue-500">Writing</Link>
        <ol>
          {posts.map((post) => (
            <li>
              <PostListSimple
                title={post.title}
                date={`${post.date.slice(0,4)} ${post.date.slice(5,7)}`}
                slug={`posts/${post.slug}`}
                key={post.title}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  </>;
}
