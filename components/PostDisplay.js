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
        <div className="tags flex gap-1 border-t border-b border-black px-5 py-3 font-sansSerif text-xs text-gray-900">
          <div>{date}</div>
          <div>•</div>
          <div>Filed under:</div>
          <div className="taglist">
            {" "}
            {tags
              ? tags.map((tag) => {
                  return (
                    <li className="inline hover:underline">
                      <Link href={`/tags/${tag}`}>{tag}</Link>
                    </li>
                  );
                })
              : "error"}
          </div>
        </div>
      </div>
      <div className="m-5 md:px-5">
        <PostBodyContent content={content} />
      </div>
    </article>
  );
};

export default PostDisplay;
