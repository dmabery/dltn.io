/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import IndexCallout from "../components/IndexCallout";
import Meta from "../components/Meta";
import PostListSimple from "../components/PostListSimple";
import { getAllCategories, getAllTags, getLatestPosts } from "../lib/service";

export const getStaticProps = async () => {
  const posts = await getLatestPosts();
  const categories = await getAllCategories(100);
  const tags = await getAllTags(100);

  return {
    props: {
      posts,
      categories,
      tags,
    },
    revalidate: 60,
  };
};

export default function Home({ posts, categories, tags }) {
  if (!posts) return <h1>No posts</h1>;
  if (!categories) return <h1>No posts</h1>;
  if (!tags) return <h1>No posts</h1>;
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <div className="flex flex-col divide-y gap-10">
        <IndexCallout />
        <div className="py-10 flex flex-col">
          <Link href="/writing" className="hover:text-blue font-sansSerif mb-3">Writing</Link>
          {posts.map((post) => (
            <PostListSimple
              title={post.title}
              date={post.date}
              slug={`posts/${post.slug}`}
              key={post.title}
            />
          ))}
      </div>
      <div className="py-10 flex flex-col">
          <Link href="/writing" className="hover:text-blue font-sansSerif mb-3">Categories</Link>
          {categories.map((category) => (
            <div className="inline" key={category}>{category}</div>
          ))}
      </div>
      <div className="py-10 flex flex-col">
          <Link href="/writing" className="hover:text-blue font-sansSerif mb-3">Categories</Link>
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
      </div>
      </div>
    </>
  );
}
