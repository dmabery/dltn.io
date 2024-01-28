import Link from "next/link";
import { useEffect } from "react";
import PostBodyContent from "./PostBodyContent";
const prism = require("prismjs");

const PostDisplay = ({ title, date, tags, content, slug, isHomePage }) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <article className="border border-black bg-white text-neutral-300">
      <div className="mb-5 flex flex-col gap-1 text-gray-900">
        <div className="p-5 font-sansSerif text-[28px] font-bold leading-tight">
          {isHomePage ? (
            <div className="hover:underline">
              <Link href={`/posts/${slug}`}>{title || ""}</Link>
            </div>
          ) : (
            <div>{title}</div>
          )}
        </div>
        <div className="tags border-t border-b border-black py-3 font-sansSerif text-xs text-gray-900">
          <div className="px-5">
            {date} | Filed under:
            {tags.map((tag) => (
              <Link href={`/tags/${tag}`} key={tag}>
                <a className="tag text-blue-700/80 hover:underline"> {tag}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5">
        <PostBodyContent content={content} />
      </div>
    </article>
  );
};

export default PostDisplay;
