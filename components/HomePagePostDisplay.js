import Link from "next/link";
import { useEffect } from "react";
import PostBodyContent from "./PostBodyContent";
const prism = require("prismjs");

const HomePagePostDisplay = ({
  title,
  description,
  image,
  date,
  tags,
  content,
  slug,
}) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <>
      <article className="text-neutral-300">
        <div className="text-gray-900/90">
          <Link href={`/posts/${slug}`}>
            <a className="mb-1 font-serif text-3xl font-bold">{title || ""}</a>
          </Link>
          <div className="tags border-[#868686/60] flex gap-2 border-t border-b py-3 text-xs text-[#868686]">
            <div>|</div>
          </div>
        </div>
        <div>
          <PostBodyContent content={content} />
        </div>
      </article>
      <div className="flex items-center gap-5">
        <hr className="w-[225px]"></hr>
        <div className="text-4xl font-bold">d.</div>
        <hr className="w-[225px]"></hr>
      </div>
    </>
  );
};

export default HomePagePostDisplay;
