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

const PostDisplay = ({ title, date, tags, content, slug, isHomePage, category }) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  const dateobj = new Date(date);
  const formattedDate = dateobj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  return (
    <article className="text-neutral-300">
      <div className="mb-5 flex flex-col text-gray-900">
        <div className="font-sansSerif text-[25px] font-bold leading-tight md:text-[28px]">
          {isHomePage ? (
            <div className="hover:underline">
              <Link href={`/posts/${slug}`} legacyBehavior>{title || ""}</Link>
            </div>
          ) : (
            <div>{title}</div>
          )}
        </div>
        <div className="mt-1.5 font-sansSerif flex gap-3 text-xs">
          <div>{formattedDate}</div>
          <div>Category: <span className="text-blue-800 hover:underline"><Link href={`/categories/${category}`}>{category}</Link></span></div>
        </div>
      </div>
      <div className="mb-5">
        <PostBodyContent content={content} />
      </div>
      <div className="tags gap-1 border-t border-black py-2 font-sansSerif text-xs text-gray-900 md:flex">
          <div className="md:flex">Tags: </div>
          <div className="taglist">
            {" "}
            {tags
              ? tags.map((tag) => {
                  return (
                    <li className="inline">
                        <Link href={`/tags/${slugify(tag)}`} legacyBehavior><a className="text-blue-800 hover:underline">{tag}</a></Link>
                    </li>
                  );
                })
              : "error"}
          </div>
        </div>
    </article>
  );
};

export default PostDisplay;
