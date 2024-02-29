/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import { getPostsByCategories } from "../lib/service";

export const getStaticProps = async () => {
  const posts = await getPostsByCategories(100); // retrieve first 100 posts

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default function NoteList({ posts }) {
  if (!posts) {
    return <div>Loading...</div>; // Handle loading state
  }
  console.log(posts);
  return (
    <>
      <Meta
        title="Book Notes"
        description="Notes, summaries, and lessons from 30+ books."
      />
      <div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <div className="cursor-pointer transition-all hover:scale-105">
              <Link
                href={`/posts/${post.slug}`}
                className="transition-all hover:scale-105"
              >
                <a>
                  <Image
                    key={post.id}
                    src={post.featuredImage?.node.sourceUrl}
                    layout="responsive"
                    height={75}
                    width={50}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
