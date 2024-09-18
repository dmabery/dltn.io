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
        {isHomePage ? (
            <div className="hover:underline">
              <Link href={`/posts/${slug}`} legacyBehavior>{formattedDate || ""}</Link>
            </div>
          ) : (
            <div>{formattedDate}</div>
          )}
          <div className="flex taglist">
            Categorized:
          {category.map((category) => (
            <li key={category} className="inline ml-1 text-blue-800 tags">
              <Link href={`/categories/${slugify(category)}`} legacyBehavior>
                <a className="text-blue hover:underline tags">{category}</a>
              </Link>
            </li>
          ))}
        </div>
        </div>
      </div>
      <div className="mb-5">
        <PostBodyContent content={content} />
      </div>
    </article>
    {tags && tags.length > 0 && (
      <div className="tags justify-between bg-black px-5 py-5 font-sansSerif text-xs text-white md:flex">
        <div className="md:flex">Tagged</div>
        <div className="flex divide-x">
          {tags.map((tag) => (
            <li key={tag} className="inline px-3">
              <Link href={`/tags/${slugify(tag)}`} legacyBehavior>
                <a className="text-white hover:underline">{tag}</a>
              </Link>
            </li>
          ))}
        </div>
      </div>
    )}

    </div>
  );
};

export default PostDisplay;

