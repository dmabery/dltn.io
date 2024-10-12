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
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
      <h1 className="text-2xl">Hi, I'm Dalton</h1>
        <div className="flex pb-10 border-b flex-col gap-3">
          <p>
            I'm a first year law student in Sacramento. I write about what I learn studying law and reading about history.
          </p>
          <p>Explore my pages and posts:</p>
          <ol className="list-disc pl-4">
            <li>Posts about <Link className="text-[#003EDB] hover:text-blue-900 underline" href="/tags/books">books</Link></li>
            <li>Posts about <Link className="text-[#003EDB] hover:text-blue-900 underline" href="/tags/reading">reading</Link></li>
            <li>Posts about <Link className="text-[#003EDB] hover:text-blue-900 underline" href="/tags/history">history</Link></li>
            <li>Posts about <Link className="text-[#003EDB] hover:text-blue-900 underline" href="/tags/writing">writing</Link></li>
            <li>Posts about <Link className="text-[#003EDB] hover:text-blue-900 underline" href="/tags/people">people</Link></li>
          </ol>
        </div>
        <p></p>
      </div>
      <div className="flex flex-col pt-10">
        <h2><Link href="/writing" className="text-2xl hover:text-[#003EDB]">Writing</Link></h2>
        <ol className="mt-2">
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
