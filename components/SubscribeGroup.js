import Link from "next/link";
import Subscribe from "./Subscribe";

const SubscribeGroup = ({ title, caption }) => (
  <div className="text-neutral-700">
    <Link href="/subscribe"><p className="text-gray-600 mb-5 hover:text-blue">Subscribe</p></Link>
    <div className="mb-2 font-sansSerif text-xl font-bold md:text-2xl">
      {title || null}
    </div>
    <div className="mb-5 mt-1 max-w-xl font-sansSerif">
      {caption || (
        <>
          Recieve new posts and my monthly reading list emails.
        </>
      )}
    </div>
    <Subscribe />
  </div>
);
export default SubscribeGroup;
