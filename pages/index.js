/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Meta from "../components/Meta";
import { getAllPosts, getTags } from "../lib/getMarkdownFiles";
import generateRssFeed from "../utils/rss";

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const tags = await getTags();

  generateRssFeed(posts);

  return {
    props: { posts, tags },
  }};

export default function Home({ posts, tags }) {
  if (!posts) return <h1>No posts</h1>;

  const posts2025 = posts.filter(item => {
    const year = new Date(item.date).getFullYear();
    return year === 2025
  })

  const posts2024 = posts.filter(item => {
    const year = new Date(item.date).getFullYear();
    return year === 2024
  })

  const posts2023 = posts.filter(item => {
    const year = new Date(item.date).getFullYear();
    return year === 2023
  })

  const posts2022 = posts.filter(item => {
    const year = new Date(item.date).getFullYear();
    return year === 2022
  })

  return <>
    <Meta
      title="Dalton Mabery is a law student who reads and writes."
      description="Law and history nerd. Writer."
    />
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
      <h1 className="text-2xl">Hi, I'm Dalton</h1>
        <div className="flex pb-10 border-b flex-col gap-3">
          <p>
            I'm a rising second year law student in Sacramento. I write about what I learn studying law and reading about history.
          </p>
          <p>Explore my pages and posts:</p>
          <ol className="list-disc pl-4">
            <li>Posts about <Link className="text-[#003EDB] hover:text-blue-900 underline" href="/tags/books">books</Link></li>
            <li>Posts about <Link className="text-[#003EDB] hover:text-blue-900 underline" href="/tags/reading">reading</Link></li>
            <li>Posts about <Link className="text-[#003EDB] hover:text-blue-900 underline" href="/tags/history">history</Link></li>
            <li>Posts about <Link className="text-[#003EDB] hover:text-blue-900 underline" href="/tags/writing">writing</Link></li>
            <li>Posts about <Link className="text-[#003EDB] hover:text-blue-900 underline" href="/tags/people">people</Link></li>
          </ol>
        </div>
        <p></p>
      </div>
      <div className="flex flex-col pt-10">
        <h2 className="text-2xl">Writing</h2>
        <div className="flex flex-col pt-10">
        <h3 className="mt-2">2025</h3>
        <ol className="mt-2">
          {posts2025.map((post) => (
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex-1 md:mr-20">
                <Link
                  className="text-[#003EDB] hover:text-blue-900 underline"
                  href={`/posts/${post.slug}`}
                >
                  {post.title}
                </Link>
              </div>
              <div className="text-neutral-600 hidden md:flex whitespace-nowrap">
                {post.date.slice(5, 10)}
              </div>
            </div>
          ))}
        </ol>
      </div>
        <h3 className="mt-2">2024</h3>
        <ol className="mt-2">
          {posts2024.map((post) => (
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex-1 md:mr-20">
                <Link
                  className="text-[#003EDB] hover:text-blue-900 underline"
                  href={`/posts/${post.slug}`}
                >
                  {post.title}
                </Link>
              </div>
              <div className="text-neutral-600 hidden md:flex whitespace-nowrap">
                {post.date.slice(5, 10)}
              </div>
            </div>
          ))}
        </ol>
      </div>
      <div className="flex flex-col pt-10">
        <h3 className="mt-2">2023</h3>
        <ol className="mt-2">
          {posts2023.map((post) => (
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex-1 md:mr-20">
                <Link
                  className="text-[#003EDB] hover:text-blue-900 underline"
                  href={`/posts/${post.slug}`}
                >
                  {post.title}
                </Link>
              </div>
              <div className="text-neutral-600 hidden md:flex whitespace-nowrap">
                {post.date.slice(5, 10)}
              </div>
            </div>
          ))}
        </ol>
      </div>
      <div className="flex flex-col pt-10">
        <h3 className="mt-2">2022</h3>
        <ol className="mt-2">
          {posts2022.map((post) => (
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex-1 md:mr-20">
                <Link
                  className="text-[#003EDB] hover:text-blue-900 underline"
                  href={`/posts/${post.slug}`}
                >
                  {post.title}
                </Link>
              </div>
              <div className="text-neutral-600 hidden md:flex whitespace-nowrap">
                {post.date.slice(5, 10)}
              </div>
            </div>
          ))}
        </ol>
      </div>
    </div>
  </>;
}
