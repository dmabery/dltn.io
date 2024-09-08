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
    <article className="text-neutral-300 border border-black p-5 bg-white">
      <div className="mb-5 flex flex-col gap-1 text-gray-900">
        <div className="font-sansSerif text-[25px] font-medium leading-tight md:text-[28px]">
          {isHomePage ? (
            <div className="hover:underline pb-2 font-semibold">
              <Link href={`/posts/${slug}`} legacyBehavior>{title || ""}</Link>
            </div>
          ) : (
            <div>{title}</div>
          )}
        </div>
        <div className="tags flex gap-1 border-t border-b border-black/10 py-2 font-sansSerif text-xs text-gray-900 md:flex-row">
          <div>{date.slice(0, 10)}</div>
          <div>•</div>
          <div className="hidden md:flex">Filed under:</div>
          <div className="taglist">
            {" "}
            {tags
              ? tags.map((tag) => {
                  return (
                    <li className="inline">
                        <Link href={`/tags/${slugify(tag)}`} legacyBehavior><a className="hover:underline">{tag}</a></Link>
                    </li>
                  );
                })
              : "error"}
          </div>
        </div>
      </div>
      <div className="">
        <PostBodyContent content={content} />
      </div>
    </article>
  );
};

export default PostDisplay;
