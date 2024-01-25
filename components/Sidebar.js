import Subscribe from "../components/Subscribe";

export default function Sidebar({ children, left, post }) {
  return (
    <>
      <div className="flex max-w-[900px] gap-5">
        <div className="w-[100%] md:w-[75%]">{children}</div>
        <div className="mb-5 hidden w-1/3 p-5 text-sm md:flex md:flex-col">
          <h2 className="mb-3 border-b border-[#ffffff] pb-3 font-sansSerif text-lg font-bold text-[#191919]">
            Words on words, books, people, and ideas.
          </h2>
          <h2 className="mb-2 font-sansSerif text-lg font-bold">
            Hi, I'm Dalton
          </h2>
          <div className=" mb-3 border-b border-[#191919] pb-3">
            <div className="mb-3 border-b border-[#191919] pb-3 text-[17px] leading-tight">
              I'm a video editor and designer who reads and writes about what I
              learn.
            </div>
            <h2 className="mb-2 font-sansSerif text-lg font-bold">Subscribe</h2>
            <div className="mb-3 text-[17px] leading-tight">
              Sign up to receive new posts and updates via email.
            </div>
            <Subscribe />
          </div>
          <h2 className="mb-3 font-sansSerif text-lg font-bold">Quick Links</h2>
          <ul className="text-[17px] leading-tight">
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
