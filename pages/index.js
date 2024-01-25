/* eslint-disable react/no-unescaped-entities */
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Meta from "../components/Meta";
import PostListSimple from "../components/PostListSimple";
import Subscribe from "../components/Subscribe";
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
        <div className="flex flex-col gap-2 pb-5">
          <h2 className="text-2xl font-medium">Hi, I'm Dalton</h2>
          <div className="flex flex-col gap-3 text-gray-700">
            <p>
              I'm the digital creator and editor at{" "}
              <a
                className="underline decoration-gray-400 underline-offset-2 hover:no-underline"
                href="https://fs.blog/"
                target="_blank?"
              >
                Farnam Street
              </a>
              .
            </p>
            <p>
              I spend my free time{" "}
              <span className="font-serif text-lg italic">learning</span>,
              <span className="font-serif text-lg italic"> reading</span>, and
              <span className="font-serif text-lg italic"> writing</span> about
              history's most interesting people, ideas, essays, and inventions.
            </p>
            <p>
              Every Friday, I share insights about life and three things I
              learned, read, or listened to that week. Subscribe below.
            </p>
            <Subscribe />
          </div>
          <p></p>
        </div>
        <div className="taglist flex flex-col gap-2 py-5">
          <p className="text-gray-600">Topics</p>
          <div>
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
        </div>
        <div className="flex flex-col gap-2 py-5">
          <p className="text-gray-600">Latest</p>
          <ol>
            {sortedPosts.slice(0, 10).map((post) => (
              <li>
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
              </li>
            ))}
          </ol>
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
