import Link from "next/link";
import OutsideLink from "../components/OutsideLink";
import Subscribe from "../components/Subscribe";

export default function Sidebar({ children }) {
  return (
    <>
      <div className="grid grid-cols-1 divide-x md:grid-cols-4">
        <div className="col-span-1 pr-5 text-sm">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            Hi, I'm Dalton
          </h2>
          <div className=" text-gray-900/90">
            <div className="mb-3">
              I'm a <b>video editor</b> and <b>designer</b> who reads and writes
              about what I learn.
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
          <div>
            <OutsideLink
              link="https://www.twitter.com/dltnio"
              text="follow me on twitter"
            />
            <OutsideLink
              link="https://youtube.com/@dltnio"
              text="subscribe on youtube"
            />
          </div>
        </div>
        <div className="col-span-2 pl-5">{children}</div>
      </div>
    </>
  );
}
