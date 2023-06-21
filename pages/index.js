/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Meta from "../components/Meta";
import OutsideLink from "../components/OutsideLink";
import PostListSimple from "../components/PostListSimple";
import Subscribe from "../components/Subscribe";
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
  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-1">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Hi, I'm Dalton
          </h2>
          <div className=" text-gray-900/90">
            <div className="mb-3">
              I'm a <b>video editor</b> and <b>designer</b> who reads and writes
              about what I learn. I currently work at Farnam Street.
            </div>
            <div className="mb-3">
              Every Friday, I send an email with insights, stories, and other
              interesting ideas I learn from reading books and researching
              online. You can read previous editions
              <span className="text-blue-700 hover:text-blue-900 hover:underline">
                <Link href="/221b"> here</Link>
              </span>
              .
            </div>
            <Subscribe />
          </div>
        </div>
        <div className="col-span-3">
          <div className="mx-auto flex flex-col">
            <Meta
              title="Dalton Mabery is a video editor who reads and writes."
              description="Developer, Video Editor, Writer."
            />
            <div className="mt-4 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
              <OutsideLink
                link="https://www.twitter.com/dltnio"
                text="follow me on twitter"
              />
              <OutsideLink
                link="https://youtube.com/@dltnio"
                text="subscribe on youtube"
              />
            </div>
          </div>
          <div className="mb-10 text-gray-900/80">
            <div>
              <h3 className="mb-2 mt-4 text-3xl font-bold text-gray-900">
                Recent Posts
              </h3>
              {posts.slice(0, 8).map((post) => (
                <PostListSimple
                  title={post.title}
                  slug={`posts/${post.slug}`}
                  date={post.date}
                  key={post.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
