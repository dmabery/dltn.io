import Link from "next/link";
import Subscribe from "./Subscribe";

const SubscribeGroup = ({ title, caption }) => (
  <div className="mt-10 rounded-lg bg-grayAccent py-8 px-5 text-customBlack">
    <div className="mb-2 font-serif text-xl font-bold md:text-2xl">
      {title || "Subscribe to The Wandering Reader"}
    </div>
    <div className="mb-3 mt-1 max-w-xl text-sm">
      {caption || (
        <>
          Learn five interesting insights, ideas, and stories from history's
          most unique thinkers in your inbox every Friday. Read past editions{" "}
          <Link href="/tags/221b" className="text-blue-700 hover:text-blue-900">
            here
          </Link>
          .
        </>
      )}
    </div>
    <Subscribe />
  </div>
);
export default SubscribeGroup;
