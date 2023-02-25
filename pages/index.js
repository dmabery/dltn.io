/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Meta from "../components/Meta";
import { getAllPublished, getTags } from "./api/notion";

export const getStaticProps = async () => {
  const data = await getAllPublished();
  const tags = await getTags();

  return {
    props: {
      posts: data,
      tags,
    },
    revalidate: 60,
  };
};

export default function Home({ posts, tags }) {
  if (!posts) return <h1>No posts</h1>;
  console.log(posts);
  return (
    <>
      <Meta
        title="Dalton Mabery"
        description="Developer, Video Editor, Writer."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <div className="bg-black"></div>
        <div className="col-span-2">
          {posts.slice(0, 1).map((post) => (
            <div className="flex h-full w-full flex-col p-5">
              <div className="relative h-96 min-w-full">
                <Image src={post.image} layout="fill" objectFit="contain" />
              </div>
              <p className="font-heading text-2xl font-bold">{post.title}</p>
              <p className="font-serif">{post.description}</p>
              <p className="font-serif">{post.date}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-400"></div>
      </div>
    </>
  );
}
