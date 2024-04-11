import Subscribe from "../components/Subscribe";

export default function Sidebar({ children, left, post }) {
  return (
    <>
      <div className="flex gap-10 max-w-[1000px] justify-between">
        <div className="hidden pt-10 min-h-full border-r border-b border-black bg-white px-8 p-5 text-sm md:flex w-[425px] md:flex-col">
          <h2 className="mb-5 border-b border-[#191919] pb-3 font-sansSerif text-lg font-medium leading-tight text-gray-900">
            Words on history, books, people, and ideas.
          </h2>
          <h2 className="mb-2 font-sansSerif text-lg font-medium text-gray-900">
            Hi, I'm Dalton
          </h2>
          <div className=" mb-5 border-b border-[#191919] pb-5 text-gray-700">
            <div className="mb-3 border-b border-[#191919] pb-5 text-[16px]">
              I'm a video editor and designer who reads and writes about what I
              learn.
            </div>
            <h2 className="mb-2 font-sansSerif text-lg font-medium text-gray-900">
              Subscribe
            </h2>
            <div className="mb-3 text-[16px]">
              Sign up to recieve my monthly reading list email. It includes books and links you can learn from.
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
        </div>
        <div className="mt-5 pb-20 px-5 lg:pl-12 lg:pr-12 pt-10 w-[100%] md:m-0">{children}</div>
      </div>
    </>
  );
}
