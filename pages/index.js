/* eslint-disable react/no-unescaped-entities */
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Meta from "../components/Meta";
import PostExcerpt from "../components/PostExcerpt";
import PostListSimple from "../components/PostListSimple";
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

export default function Home({ posts, tags }) {
  if (!posts) return <h1>No posts</h1>;
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontmatter.Date) - new Date(a.frontmatter.Date)
  );
  const featuredPost = sortedPosts.slice(0, 1);
  return (
    <>
      <Meta
        title="Dalton Mabery is a video editor who reads and writes."
        description="Developer, Video Editor, Writer."
      />
      <div className="flex flex-col divide-y">
        <div className="pb-5">
          {featuredPost.map((post) => (
            <PostExcerpt
              key={post.frontmatter.Title}
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
        <div className="taglist py-5">
          {tags.map((tag) => (
            <li className="inline font-sansSerif text-slate-900" key={tag}>
              <Link
                className="underline hover:no-underline"
                href={`/tags/${tag}`}
              >
                {tag}
              </Link>
            </li>
          ))}
        </div>
        <div className="py-5">
          {sortedPosts.slice(1, 10).map((post) => (
            <PostListSimple
              key={post.frontmatter.Title}
              title={post.frontmatter.Title}
              date={post.frontmatter.Date}
              tags={post.frontmatter.Tags}
              description={post.frontmatter.Description}
              image={post.frontmatter.Image}
              slug={`posts/${post.frontmatter.Slug}`}
              content={post.content}
            />
          ))}
          <div className="py-5">
            Read more{" "}
            <Link className="underline hover:no-underline" href="/writing">
              here
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
}
