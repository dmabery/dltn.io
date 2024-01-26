import Link from "next/link";
import Subscribe from "../components/Subscribe";

export default function Sidebar({ children, left, post }) {
  return (
    <>
      <div className="flex max-w-[900px] gap-5 divide-x">
        <div className="w-[100%] md:w-[75%]">{children}</div>
        <div className="mb-5 hidden w-1/3 pl-5 text-sm md:flex md:flex-col">
          <h2 className="mb-3 border-b border-[#191919] pb-3 font-sansSerif text-lg font-bold text-gray-900">
            Words on words, books, people, and ideas.
          </h2>
          <h2 className="mb-2 font-sansSerif text-lg font-bold text-gray-900">
            Hi, I'm Dalton
          </h2>
          <div className=" mb-3 border-b border-[#191919] pb-3 text-gray-900/90">
            <div className="mb-3 border-b border-[#191919] pb-3 text-[16px]">
              I'm a <b>video editor</b> and <b>designer</b> who reads and writes
              about what I learn.
            </div>
            <h2 className="mb-2 font-sansSerif text-lg font-bold text-gray-900">
              Subscribe
            </h2>
            <div className="mb-3 text-[16px]">
              Every Friday, I send an email with insights, stories, and other
              interesting ideas I learn from reading books. Read previous
              editions
              <span className="text-blue-700 hover:text-blue-900 hover:underline">
                <Link href="/221b"> here</Link>
              </span>
              .
            </div>
            <Subscribe />
          </div>

          <ul className="text-[16px] text-blue-600">
            <li>
              <a href="https://twitter.com/dltnio" target="_blank">
                Follow me on Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
