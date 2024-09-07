/* eslint-disable react/no-unescaped-entities */
import Meta from "../components/Meta";
import PostDisplay from "../components/PostDisplay";
import { getAllPosts, getTags } from "../lib/getMarkdownFiles";

export const getStaticProps = async () => {
  const posts = (await getAllPosts()).slice(0,10);
  const tags = await getTags();

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
        <ol>
          {posts.map((post) => (
            <li className="mb-20">
              <PostDisplay
                title={post.title}
                date={post.date.slice(0,10)}
                slug={`posts/${post.slug}`}
                key={post.title}
                tags={post.tags.map(tag => tag.name)}
                content={post.content}
              />
            </li>
          ))}
        </ol>
  </>;
}
