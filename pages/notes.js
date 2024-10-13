/* eslint-disable react/no-unescaped-entities */
import Markdown from "markdown-to-jsx";
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
        <h1 className="text-2xl mb-2">Notes, Quotes, and Lessons from Books, Articles, and PDFs</h1>
        <p className="mb-3">These are not—nor do they intend to be—summaries.</p>
        <p className="mb-3">Enjoy the "highlights," but don't supplement reading these for reading the actual source. If it's posted, I highly reccomend it.</p>
        <p className="mb-5">Sign up below for an email when I post new notes.</p>
        <div className="border-b mb-10 pb-10">
          <Subscribe />
        </div>
      </div>
      <div className="flex gap-10 flex-col">
        {posts
          .map((post) => (
            <div>
              <div className="mr-5 mb-3 cursor-pointer w-40 md:float-left transition-all hover:scale-105">
                <Link
                  href={`/posts/${post.slug}`}
                  className="transition-all hover:scale-105"
                  legacyBehavior>
                  <Image
                    key={post.id}
                    src={post.image}
                    layout="responsive"
                    height={10}
                    width={5}
                  />
                </Link>
              </div>
              <div>
                <Link href={`/posts/${post.slug}`} className="text-xl hover:text-blue-900 font-semibold">{post.title}</Link>
                <p className="mt-1 md:mt-3"><Markdown>{`${post.excerpt.slice(0,200)}...`}</Markdown></p>
              </div>
            </div>
          ))}
      </div>
    </div>
  </>;
};

export default NoteList;
