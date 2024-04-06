import Subscribe from "../components/Subscribe";

export default function Sidebar({ children }) {
  return (
    <>
      <div className="mt-20 md:divide-x divide-black flex justify-between md:border md:border-black bg-none md:bg-white">
        <div className="mb-5 hidden h-full flex-none p-5 text-sm md:flex md:w-[28%] md:flex-col">
          <h2 className="mb-5 border-b border-[#191919] pb-3 font-sansSerif text-lg font-medium leading-tight text-gray-900">
            Words on words, books, people, and ideas.
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
        <div className="mx-2 w-[100%] justify-end md:m-0">{children}</div>
      </div>
    </>
  );
}
