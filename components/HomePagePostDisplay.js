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
        <div className="mb-5 flex flex-col gap-2 text-gray-900/90">
          <Link href={`/posts/${slug}`}>
            <a className="font-sansSerif text-[28px] font-bold leading-tight">
              {title || ""}
            </a>
          </Link>
          <div className="tags border-[#868686/60] flex gap-2 border-t border-b py-3 font-sansSerif text-xs text-[#868686]">
            <div>{date}</div>
            <div>|</div>
            <div>
              Filed under:
              {tags.map((tag) => (
                <Link href={`/tags/${tag}`} key={tag}>
                  <a className="tag text-blue-700/80 hover:underline"> {tag}</a>
                </Link>
              ))}
            </div>
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
