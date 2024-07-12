import Link from "next/link";
import Subscribe from "../components/Subscribe";

export default function Sidebar({ children, posts }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="hidden w-[350px] pt-10 min-h-full border-r border-b border-black bg-white px-8 p-5 text-sm md:flex md:flex-col">
          <h2 className="mb-5 border-b border-[#191919] pb-3 font-sansSerif text-lg font-medium leading-tight text-gray-900">
            Helping you learn from history and books—one post at a time.
          </h2>
          <h2 className="mb-2 font-sansSerif text-lg font-medium text-gray-900">
            Hi, I'm Dalton
          </h2>
          <div className=" mb-5 border-b border-[#191919] pb-5 text-gray-700">
            <div className="mb-3 border-b border-[#191919] pb-5 text-[17px]">
              I'm a video editor and designer who reads and writes about what I
              learn.
            </div>
            <h2 className="mb-2 font-sansSerif text-lg font-medium text-gray-900">
              Subscribe
            </h2>
            <div className="mb-3 text-[17px]">
              Subscribe to receive new posts and my monthly reading list via email.
            </div>
            <Subscribe />
          </div>
          <h2 className="mb-3 font-sansSerif text-lg font-medium text-gray-700">
            Quick Links
          </h2>
          <ul className="transition:all text-[16px] text-blue-700 hover:text-blue-800 hover:underline">
            <li>
              <a href="https://twitter.com/dltnio" target="_blank">
                Follow me on Twitter
              </a>
            </li>
          </ul>
          <h2 className="mb-3 font-sansSerif text-lg font-medium leading-tight text-gray-900">
            Latest posts
          </h2>
          <ol className="flex border-b text-gray-900 mb-3 pb-3 border-black flex-col gap-3">
            {posts ? posts.map((post, index) => (
              <li className="text-[17px] font-serif leading-tight hover:underline text-blue-800"><Link href={`posts/${post.slug}`}>{post.title}</Link></li>
            )) : null }
          </ol>
          <div className=" mb-5 border-b border-[#191919] pb-5 text-gray-700">
            <h2 className="mb-2 font-sansSerif text-lg font-medium text-gray-900">
              Categories
            </h2>
          </div>
        </div>
        <div className="bg-[#f8f8f8] w-3/4">
            <div className="pb-20 lg:px-10 pt-10">
              {children}
            </div>
        </div>
      </div>
    </>
  );
}
