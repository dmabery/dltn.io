import Link from "next/link";
import Subscribe from "./Subscribe";

const SubscribeGroup = ({ title, caption }) => (
  <div className="text-customBlack">
    <div className="mb-2 font-sansSerif text-xl font-bold md:text-2xl">
      {title || null}
    </div>
    <div className="mb-3 mt-1 max-w-xl font-sansSerif text-sm">
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
