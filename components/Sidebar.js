import Subscribe from "../components/Subscribe";

export default function Sidebar({ children, left, post }) {
  return (
    <>
      <div className="mt-20 flex max-w-[1000px] justify-between md:gap-10 lg:gap-20">
        <div className="mx-5 mt-5 w-[100%] md:m-0 md:w-[60%]">{children}</div>
        <div className="sticky top-20 mb-5 hidden h-full w-1/3 self-start border border-black bg-white p-5 text-sm md:flex md:w-[28%] md:flex-col">
          <h2 className="mb-5 border-b border-[#191919] pb-3 font-sansSerif text-lg font-bold leading-tight text-gray-900">
            Words on words, books, people, and ideas.
          </h2>
          <h2 className="mb-2 font-sansSerif text-lg font-bold text-gray-900">
            Hi, I'm Dalton
          </h2>
          <div className=" mb-5 border-b border-[#191919] pb-5 text-gray-700">
            <div className="mb-3 border-b border-[#191919] pb-5 text-[16px]">
              I'm a video editor and designer who reads and writes about what I
              learn.
            </div>
            <h2 className="mb-2 font-sansSerif text-lg font-bold text-gray-900">
              Subscribe
            </h2>
            <div className="mb-3 text-[16px]">
              Sign up to receive seven new things to read, watch, listen to, or
              learn from every week.
            </div>
            <Subscribe />
          </div>
          <h2 className="mb-3 font-sansSerif text-lg font-bold text-gray-700">
            Quick Links
          </h2>
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
