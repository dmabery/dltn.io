import Link from "next/link";
import { useEffect } from "react";
import PostBodyContent from "./PostBodyContent";
const prism = require("prismjs");

const PostDisplay = ({
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

  return <>
    <article className="text-[neutral-200]">
      <div className="mb-14 font-sansSerif">
        <div className="text-[27px] leading-tight font-semibold text-neutral-800">
          {title || ""}
        </div>
        <div className="tags flex gap-2 py-2 text-sm text-[#868686]">
          <div>{date.slice(0,10)}</div>
        </div>
      </div>
      <div>
        <PostBodyContent content={content} />
      </div>
      <div className="my-28 inline-flex items-center">
        <p className="text-sm text-neutral-700 mr-2">Tagged</p>
            {tags
              ? tags.map((tag) => {
                  return (
                    <li className="inline mr-2 hover:text-blue-800 text-[#003EDB] font-medium text-sm">
                      <Link className="underline" href={`/tags/${tag}`}>
                        {tag}
                      </Link>
                    </li>
                  );
                })
              : "error"}
          </div>
    </article>
  </>;
};

export default PostDisplay;
