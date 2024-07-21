/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import { getAllPosts } from "../lib/getMarkdownFiles";

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {posts}
  };
};

const NoteList = ({ posts, frontmatter }) => {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return <>
    <Meta
      title="Book Notes"
      description="Notes, summaries, and lessons from 30+ books."
    />
    <div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {sortedPosts
          .filter((post) => post.type === "Book Notes")
          .map((post, index) => (
            <div className="cursor-pointer transition-all hover:scale-105">
              <Link
                href={`/posts/${post.slug}`}
                className="transition-all hover:scale-105"
                legacyBehavior>
                <Image
                  key={post.id}
                  src={post.image}
                  layout="responsive"
                  height={75}
                  width={50}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  </>;
};

export default NoteList;
