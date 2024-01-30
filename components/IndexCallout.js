import Link from "next/link";
import Subscribe from "./Subscribe";

export default function IndexCallout() {
  return (
    <div className="flex h-screen md:hidden">
      <div className="container m-auto flex flex-col gap-2 border border-black bg-white p-5">
        <div className="font-sansSerif text-[22px] font-bold">
          Hi, I'm Dalton
        </div>
        <div className="flex flex-col gap-4 text-[19px] leading-tight">
          <p>
            I'm a video editor and designer who reads and writes about what I
            learn. Read more about me{" "}
            <Link href="/about">
              <a className="text-blue-700 hover:text-blue-900 hover:underline">
                here
              </a>
            </Link>
            .
          </p>
          <p>
            Every Friday, I send a newsletter filled with interesting essays,
            books, and ideas. If you love to learn, you should subscribe.
          </p>
          <Subscribe />
        </div>
      </div>
    </div>
  );
}
