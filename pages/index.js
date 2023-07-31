/* eslint-disable react/no-unescaped-entities */
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import HomePagePostDisplay from "../components/HomePagePostDisplay";
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

export default function Home({ posts, tags, content }) {
  if (!posts) return <h1>No posts</h1>;
  console.log(posts);
  const sortedPosts = posts
    .sort((a, b) => new Date(b.frontmatter.Date) - new Date(a.frontmatter.Date))
    .slice(0, 5);
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <div className="flex flex-col gap-2">
        {sortedPosts.map((post) => (
          <HomePagePostDisplay
            title={post.frontmatter.Title}
            date={post.frontmatter.Date}
            tags={post.frontmatter.Tags}
            description={post.frontmatter.description}
            image={post.frontmatter.image}
            slug={post.frontmatter.Slug}
            content={post.content}
          />
        ))}
      </div>
    </>
  );
}
