import Subscribe from "../components/Subscribe";

export default function Sidebar({ children, left, post }) {
  return (
    <>
      <div className="flex max-w-[900px] gap-5">
        <div className="w-[100%] md:w-[75%]">{children}</div>
        <div className="mb-5 hidden w-1/3 border border-[#b3b3b3] bg-grayAccent p-5 text-sm md:flex md:flex-col">
          <h2 className="mb-3 border-b border-[#191919] pb-3 font-sansSerif text-lg font-bold text-gray-900">
            Words on words, books, people, and ideas.
          </h2>
          <h2 className="mb-2 font-sansSerif text-lg font-bold text-gray-900">
            Hi, I'm Dalton
          </h2>
          <div className=" mb-3 border-b border-[#191919] pb-3 text-gray-900/90">
            <div className="mb-3 border-b border-[#191919] pb-3">
              I'm a video editor and designer who reads and writes about what I
              learn.
            </div>
            <h2 className="mb-2 font-sansSerif text-lg font-bold text-gray-900">
              Subscribe
            </h2>
            <div className="mb-3">
              Sign up to receive new posts and updates via email.
            </div>
            <Subscribe />
          </div>
          <h2 className="mb-3 font-sansSerif text-lg font-bold text-gray-900">
            Quick Links
          </h2>
          <ul className="text-blue-600">
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
