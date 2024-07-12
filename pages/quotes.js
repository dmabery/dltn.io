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
    <div>
        <ol className="flex flex-col gap-8">
          {posts.map((post) => (
            <li key={post.title}>
              <StreamPostDisplay
                title={post.title}
                content={post.content}
                link={post.link || null}
                date={post.date}
              />
            </li>
          ))}
        </ol>
      </div>
  </>;
}
