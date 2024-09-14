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
    <div>
    <article className="text-neutral-300 bg-white border border-black p-5">
      <div className="mb-5 flex flex-col text-gray-900">
        <div className="font-sansSerif text-[25px] font-bold leading-tight md:text-[26px]">
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
    </article>
        <div className="tags justify-between bg-black px-5 py-5 font-sansSerif text-xs text-white md:flex">
          <div className="md:flex">Tagged</div>
          <div className="flex divide-x">
            {" "}
            {tags
              ? tags.map((tag) => {
                  return (
                    <li className="inline px-3">
                        <Link href={`/tags/${slugify(tag)}`} legacyBehavior><a className="text-white hover:underline">{tag}</a></Link>
                    </li>
                  );
                })
              : "error"}
          </div>
        </div>
    </div>
  );
};

export default PostDisplay;
