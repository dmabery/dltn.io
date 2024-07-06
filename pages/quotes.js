/* eslint-disable react/no-unescaped-entities */
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
        <ol className="divide-y divide-black">
          {posts.map((post) => (
            <li key={post.index}>
              <StreamPostDisplay
                title={post.title}
                content={post.content}
                link={post.link}
                date={post.date}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  </>;
}
