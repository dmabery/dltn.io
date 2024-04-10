import Link from "next/link";
import Subscribe from "./Subscribe";

export default function IndexCallout() {
  return (
    <div className="mb-40 flex md:hidden">
      <div className="container mx-auto flex h-full flex-col gap-2">
        <div className="font-sansSerif text-[22px] font-bold">
          Hi, I'm Dalton
        </div>
        <div className="flex flex-col gap-4 text-[19px] leading-tight">
          <p>
            I'm a video editor and designer who reads and writes about what I
            learn. Read more about me{" "}
            <Link
              href="/about"
              className="text-blue-700 hover:text-blue-900 hover:underline">

                here

            </Link>
            .
          </p>
            <p>
              Subscribe to my newsletter to receive seven new things to read,
              watch, listen to, or learn from every week.
            </p>
            <Subscribe />
        </div>
      </div>
    </div>
  );
}
