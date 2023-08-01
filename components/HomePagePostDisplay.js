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

  console.log(title, tags);

  return (
    <>
      <article className="text-neutral-300">
        <div className="space-y-1 font-sansSerif text-gray-900/90">
          <Link href={`/posts/${slug}`}>
            <a className="text-3xl font-bold">{title || ""}</a>
          </Link>
          <div className="tags border-[#868686/60] flex gap-2 border-t border-b py-2 text-xs text-[#868686]">
            <div>{date}</div>
            <div>|</div>
            {tags
              ? tags.map((tag) => {
                  return (
                    <div>
                      <Link href={`/tags/${tag}`}>{tag}</Link>
                    </div>
                  );
                })
              : "error"}
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
