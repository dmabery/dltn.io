/* eslint-disable react/no-unescaped-entities */
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import SideNote from "../components/SideNote";

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const postsDirectory = "posts";

  const posts = files
    .filter((fileName) => {
      // Check if the item is a file and not a directory
      const filePath = path.join(postsDirectory, fileName);
      return fs.statSync(filePath).isFile();
    })
    .map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(
        path.join(postsDirectory, fileName),
        "utf-8"
      );
      const { data: frontmatter, content } = matter(readFile);

      return {
        slug,
        frontmatter,
        content,
      };
    });

  return {
    props: { posts },
  };
};

const NoteList = ({ posts, frontmatter }) => {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontmatter.Date) - new Date(a.frontmatter.Date)
  );

  return <>
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
      <div className="mt-7 grid grid-cols-3 gap-6">
        {sortedPosts
          .filter((post) => post.frontmatter.Type === "Book Notes")
          .map((post, index) => (
            (<Link href={`/posts/${post.slug}`} className="transition-all hover:scale-105">

              <Image
                key={post.id}
                src={post.frontmatter.Image}
                layout="responsive"
                height={75}
                width={50}
              />

            </Link>)
          ))}
      </div>
    </div>
  </>;
};

export default NoteList;
