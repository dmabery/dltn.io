/* eslint-disable react/no-unescaped-entities */
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import IndexCallout from "../components/IndexCallout";
import Meta from "../components/Meta";
import PostDisplay from "../components/PostDisplay";
import { getTags } from "../lib/getPosts";

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

  const tags = await getTags();

  return {
    props: { posts, tags },
  };
};

export default function Home({ posts }) {
  if (!posts) return <h1>No posts</h1>;
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontmatter.Date) - new Date(a.frontmatter.Date)
  );
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <IndexCallout />
      <div className="flex flex-col gap-10">
        {sortedPosts.slice(0, 10).map((post) => (
          <PostDisplay
            title={post.frontmatter.Title}
            tags={post.frontmatter.Tags}
            description={post.frontmatter.Description}
            date={post.frontmatter.Date}
            content={post.content}
            image={post.frontmatter.image}
            slug={post.slug}
            isHomePage={true}
          />
        ))}
      </div>
    </>
  );
}
