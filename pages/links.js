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
    <div className="flex flex-col">
      <p className="border-b text-xl pb-10">Links, quotes, ideas, and notes from articles and PDFs on the net. Have a recommendation? Let me know!</p>
      <div className="flex flex-col gap-2 py-10">
        <ol>
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
