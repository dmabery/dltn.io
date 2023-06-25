import Link from "next/link";
import Subscribe from "../components/Subscribe";

export default function Sidebar({ children, left, post }) {
  console.log(post);
  return (
    <>
      <div className="p grid grid-cols-1 md:grid-cols-4 md:divide-x">
        <div className="col-span-3 md:pr-40">{children}</div>
        <div className="col-span-1 mb-5 bg-gray-100 py-5 text-sm md:border-none md:px-5">
          <div className=" text-neutral-900">
            <div className="mb-3">
              I'm Dalton, a <b>video editor</b> and <b>designer</b> who reads
              and writes about what I learn.
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
      </div>
    </>
  );
}
