/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Subscribe from "../components/Subscribe";
import { getAllPosts } from "../lib/getMarkdownFiles";


export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {posts: posts.filter((post) => post.type === "Book Notes")}
  };
};

const NoteList = ({ posts }) => {

  return <>
    <Meta
      title="Book Notes"
      description="Notes, summaries, and lessons from 30+ books."
    />
    <div>
      <div>
        <h1 className="text-2xl mb-2">Notes, quotes, and lessons from books</h1>
        <p className="mb-3">These are not—nor do they intend to be—summaries. These are my highlights and notes, the things that I enjoyed the most from the book.</p>
        <p className="mb-3">Don't supplement reading these notes for reading the actual book. If it's posted, I highly recommend reading it. I don't have a rating system because if the book wasn't at least a 7/10, I wouldn't take notes on it.</p>
        <p className="mb-5">Sign up below for an email when I post new notes.</p>
        <div className="border-b mb-10 pb-10">
          <Subscribe />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group flex flex-col gap-2 hover:no-underline"
          >
            <div className="aspect-[2/3] w-full overflow-hidden rounded border border-gray-200 bg-white">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={200}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              )}
            </div>
            <div>
              <div className="text-sm mb-2 font-semibold leading-snug text-[#191919] group-hover:underline">
                {post.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>;
};

export default NoteList;
