/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import HomePagePostDisplay from "../components/HomePagePostDisplay";
import Meta from "../components/Meta";
import OutsideLink from "../components/OutsideLink";
import Subscribe from "../components/Subscribe";
import { getAllPublished, getSingleBlogPostBySlug } from "./api/notion";

export const getStaticProps = async () => {
  const posts = await getAllPublished();
  const data = await getSingleBlogPostBySlug(posts[0].slug);
  console.log(data);
  return {
    props: {
      post: data,
    },
    revalidate: 60,
  };
};

export default function Home({ post, tags }) {
  if (!post) return <h1>No posts</h1>;
  console.log(post);
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <div className="grid grid-cols-1 divide-x md:grid-cols-4">
        <div className="col-span-1 pr-5 text-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            Hi, I'm Dalton
          </h2>
          <div className=" text-gray-900/90">
            <div className="mb-3">
              I'm a <b>video editor</b> and <b>designer</b> who reads and writes
              about what I learn.
            </div>
            <div className="mb-3">
              Every Friday, I send an email with insights, stories, and other
              interesting ideas I learn from reading books. Read previous
              editions
              <span className="text-blue-700 hover:text-blue-900 hover:underline">
                <Link href="/221b"> here</Link>
              </span>
              .
            </div>
            <Subscribe />
          </div>
          <div>
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
        <div className="col-span-2 pl-5">
          <HomePagePostDisplay
            title={post.metadata.title}
            tags={post.metadata.tags}
            description={post.metadata.description}
            date={post.metadata.date}
            content={post.markdown}
            image={post.metadata.image}
          />
        </div>
      </div>
    </>
  );
}
