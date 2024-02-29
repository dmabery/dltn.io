import Image from "next/image";
import Subscribe from "../components/Subscribe";


const reading = [
  {
    image: "http://evm.heg.mybluehost.me/wp-content/uploads/2024/02/81u3hoNxGwL._AC_UF10001000_QL80_.jpg"
  },
  {
   image: "http://evm.heg.mybluehost.me/wp-content/uploads/2024/02/61jXs4mPISL._AC_UF10001000_QL80_.jpg"
  },
  {
    image: "http://evm.heg.mybluehost.me/wp-content/uploads/2024/02/71cVf7LgG6L._AC_UF10001000_QL80_.jpg"
  }
]
export default function Sidebar({ children }) {
  return (
    <>
      <div className="mt-20 flex justify-between divide-x">
        <div className="mx-5 mt-5 w-[100%] md:m-0 pr-5">{children}</div>
        <div className="mb-5 hidden flex-none pl-5 pt-5 text-sm md:flex md:w-[32%] md:flex-col">
          <h2 className="mb-5 border-b pb-3 font-sansSerif text-lg font-bold leading-tight text-gray-900">
            Words on words, books, people, and ideas.
          </h2>
          <h2 className="mb-2 font-sansSerif text-lg font-bold text-gray-900">
            Hi, I'm Dalton
          </h2>
          <div className="pb-5 text-gray-700">
            <div className="mb-3 border-b pb-5 text-[16px]">
              I'm a video editor and designer who reads and writes about what I
              learn.
            </div>
          </div>
          <div className=" mb-5 border-b pb-5 text-gray-700">
            <h2 className="mb-2 font-sansSerif text-lg font-bold text-gray-900">
              Subscribe
            </h2>
            <div className="mb-3 text-[16px]">
              Sign up to receive seven new things to read, watch, listen to, or
              learn from every week.
            </div>
            <Subscribe />
          </div>
          <h2 className="mb-1 font-sansSerif text-lg font-bold text-gray-700">
            Quick Links
          </h2>
          <ul className="border-b pb-3 transition:all text-[16px] text-blue-700 hover:text-blue-800 hover:underline">
            <li>
              <a href="https://twitter.com/dltnio" target="_blank">
                Follow me on Twitter
              </a>
            </li>
          </ul>
          <h2 className="mb-3 mt-3 font-sansSerif text-lg font-bold text-gray-900">
            Currently reading...
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {reading.map((book) => (
            <Image
              src={book.image}
              layout="responsive"
              height={75}
              width={50}
            />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
