import Link from "next/link";
import { useEffect } from "react";
import PostBodyContent from "./PostBodyContent";
const prism = require("prismjs");

function slugify(str) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}

const PostDisplay = ({ title, date, tags, content, slug, isHomePage }) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <article className="border border-black bg-white text-neutral-300">
      <div className="mb-5 flex flex-col gap-1 text-gray-900">
        <div className="p-5 font-sansSerif text-[25px] font-medium leading-tight md:text-[28px]">
          {isHomePage ? (
            <div className="hover:underline">
              <Link href={`/posts/${slug}`} legacyBehavior>{title || ""}</Link>
            </div>
          ) : (
            <div>{title}</div>
          )}
        </div>
        <div className="tags flex gap-1 border-t border-b border-black px-5 py-3 font-sansSerif text-xs text-gray-900 md:flex-row">
          <div>{date.slice(0, 10)}</div>
          <div>•</div>
          <div className="hidden md:flex">Filed under:</div>
          <div className="taglist">
            {" "}
            {tags
              ? tags.map((tag) => {
                  return (
                    <li className="inline hover:underline">
                      <Link href={`/tags/${slugify(tag)}`} legacyBehavior>{tag}</Link>
                    </li>
                  );
                })
              : "error"}
          </div>
        </div>
      </div>
      <div className="m-5">
        <PostBodyContent content={content} />
      </div>
    </article>
  );
};

export default PostDisplay;
