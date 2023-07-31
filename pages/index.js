/* eslint-disable react/no-unescaped-entities */
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Meta from "../components/Meta";
import PostExcerpt from "../components/PostExcerpt";
import PostListSimple from "../components/PostListSimple";

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
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontmatter.Date) - new Date(a.frontmatter.Date)
  );
  const featuredPost = sortedPosts.slice(1, 2);
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <div className="flex flex-col gap-2 divide-y">
        <div className="py-5">
          {featuredPost.map((post) => (
            <PostExcerpt
              title={post.frontmatter.Title}
              date={post.frontmatter.Date}
              tags={post.frontmatter.Tags}
              description={post.frontmatter.Description}
              image={post.frontmatter.Image}
              slug={post.frontmatter.Slug}
              content={post.content}
            />
          ))}
        </div>
        <div>
          {sortedPosts.map((post) => (
            <PostListSimple
              title={post.frontmatter.Title}
              date={post.frontmatter.Date}
              tags={post.frontmatter.Tags}
              description={post.frontmatter.Description}
              image={post.frontmatter.Image}
              slug={post.frontmatter.Slug}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}
