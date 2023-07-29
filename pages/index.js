/* eslint-disable react/no-unescaped-entities */
import fs from "fs";
import matter from "gray-matter";
import HomePagePostDisplay from "../components/HomePagePostDisplay";
import Meta from "../components/Meta";

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: { posts },
  };
};

export default function Home({ posts, tags }) {
  if (!posts) return <h1>No posts</h1>;
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <div className="flex flex-col gap-10">
        {posts.map((post) => (
          <HomePagePostDisplay
            title={post.frontmatter.Title}
            tags={post.frontmatter.Tags}
            description={post.frontmatter.description}
            image={post.frontmatter.image}
            slug={post.frontmatter.Slug}
          />
        ))}
      </div>
    </>
  );
}
