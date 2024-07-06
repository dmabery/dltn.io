/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Meta from "../components/Meta";
import StreamPostDisplay from "../components/StreamPostDisplay";
import { getAllQuotes } from "../lib/getMarkdownFiles";

export const getStaticProps = async () => {
  const posts = await getAllQuotes();

  return {
    props: { posts },
  }};

export default function Home({ posts }) {
  if (!posts) return <h1>No posts</h1>;
  return <>
    <Meta
      title="Dalton Mabery is a video editor who reads and writes."
      description="Developer, Video Editor, Writer."
    />
    <div className="flex flex-col divide-y">
      <div className="flex flex-col gap-2 py-10">
        <Link href="/writing" className="text-gray-600 mb-5 hover:text-blue">Writing</Link>
        <ol>
          {posts.map((post) => (
            <li>
              <StreamPostDisplay
                title={post.title}
                content={post.content}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  </>;
}
