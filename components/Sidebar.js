import Subscribe from "../components/Subscribe";

export default function Sidebar({ children, left, post }) {
  return (
    <>
      <div className="flex justify-between max-w-[1000px]">
        <div className="ml-2 max-w-[270px] hidden h-full w-2/5 border border-black bg-white mt-10 px-4 p-5 text-sm md:flex md:flex-col">
          <h2 className="mb-5 border-b border-[#191919] pb-3 font-sansSerif text-lg font-medium leading-tight text-gray-900">
            A personal blog about books, history, and law.
          </h2>
          <h2 className="mb-2 font-sansSerif text-lg font-medium text-gray-900">
            I'm Dalton
          </h2>
          <div className=" mb-5 border-b border-[#191919] pb-5 text-gray-700">
            <div className="mb-3 border-b border-[#191919] pb-5 text-[16px]">
              I'm a first-year law student who reads (a lot) and writes about what I learn.
            </div>
            <h2 className="mb-2 font-sansSerif text-lg font-medium text-gray-900">
              Subscribe
            </h2>
            <div className="mb-3 text-[16px]">
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
        </div>
        <div className="mt-5 px-5 pb-20 pt-10 md:max-w-[625px] md:m-0">{children}</div>
      </div>
    </>
  );
}
