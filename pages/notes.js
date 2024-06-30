/* eslint-disable react/no-unescaped-entities */
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import Meta from "../components/Meta";

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
    <div className="border border-black bg-white p-5">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {sortedPosts
          .filter((post) => post.frontmatter.Type === "Book Notes")
          .map((post, index) => (
            <div className="cursor-pointer transition-all hover:scale-105">
              <Link
                href={`/posts/${post.slug}`}
                className="transition-all hover:scale-105"
                legacyBehavior>
                <Image
                  key={post.id}
                  src={post.frontmatter.Image}
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
