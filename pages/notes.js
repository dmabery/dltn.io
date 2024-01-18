/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import { getAllByType } from "./api/notion";

export const getStaticProps = async () => {
  const data = await getAllByType("Book Notes");

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

const NoteList = ({ posts }) => (
  <>
    <Meta
      title="Book Notes"
      description="Notes, summaries, and lessons from 30+ books."
    />
    <div>
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Link href={`/posts/${post.slug}`}>
            <a className="transition-all hover:scale-105">
              <Image
                key={post.id}
                src={post.image}
                layout="responsive"
                height={75}
                width={50}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  </>
);

export default NoteList;
