import Link from "next/link";
import Subscribe from "../components/Subscribe";

export default function Sidebar({ children, left, post }) {
  console.log(post);
  return (
    <>
      <div className="p grid grid-cols-1 md:grid-cols-4 md:divide-x">
        <div className="col-span-1 mb-5 rounded bg-neutral-100 p-5 text-sm md:border-none md:bg-[#fafaf9] md:p-0 md:pr-5">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            Hi, I'm Dalton
          </h2>
          <div className=" text-gray-900/90">
            <div className="mb-3">
              I'm a <b>video editor</b> and <b>designer</b> who reads and writes
              about what I learn.
            </div>
            <div className="mb-3">
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
        </div>
        <div className="col-span-2 md:px-5">{children}</div>
        <div className="mt-5 text-sm md:mt-0 md:pl-5">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Quick Links</h2>
          <ul className="text-blue-600">
            <li>
              <a href="https://twitter.com/dltnio" target="_blank">
                Follow me on Twitter
              </a>
            </li>
            <li>
              <a href="https://twitter.com/dltnio" target="_blank">
                Read my newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
