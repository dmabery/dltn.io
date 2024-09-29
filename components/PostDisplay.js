import Link from "next/link";
import { useEffect } from "react";
import PostBodyContent from "./PostBodyContent";
const prism = require("prismjs");


const PostDisplay = ({ title, date, tags, content, slug, isHomePage }) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  const dateString = new Date(date)
  const formattedDate = dateString.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="text-neutral-300">
      <div className="mb-5 flex flex-col text-gray-900">
        <div className="font-sansSerif text-[25px] font-bold leading-tight md:text-[28px]">
            <div>{title}</div>
        </div>
        <div className="tags flex gap-1 py-3 font-sansSerif text-sm text-gray-500 md:flex-row">
          <div>{formattedDate}</div>
          <div>•</div>
          <div className="hidden md:flex">Filed under:</div>
          <div className="taglist">
            {" "}
            {tags
              ? tags.map((tag) => {
                  return (
                    <li className="inline">
                      <Link href={`/tags/${tag}`} className="hover:text-blue hover:underline">{tag}</Link>
                    </li>
                  );
                })
              : "error"}
          </div>
        </div>
      </div>
      <div>
        <PostBodyContent content={content} />
      </div>
    </article>
  );
};

export default PostDisplay;
