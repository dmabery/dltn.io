/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import SideNote from "../components/SideNote";
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
    <PageTitle
      title="Book Notes"
      description={
        <div className="prose mt-3 mb-3 text-sm md:text-base">
          <SideNote
            title="Something to keep in mind..."
            content="The more that you read, the more things you will know. The more that
            you learn, the more places you'll go. – Dr. Seuss"
          />
        </div>
      }
    />
    <div className="">
      <div className="mt-7 grid grid-cols-2 gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <Image
            title={post.title}
            description={post.description}
            date={post.date}
            type={post.type}
            slug={`/posts/${post.slug}`}
            key={post.id}
            src={post.image}
            layout="responsive"
            height={75}
            width={50}
          />
        ))}
      </div>
    </div>
  </>
);

export default NoteList;
