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
      <div className="mb-5 font-sansSerif">
        <div className="text-2xl font-medium text-neutral-800">
          {title || ""}
        </div>
        <div className="tags flex gap-2 py-2 text-sm text-[#868686]">
          <div>{date.slice(0,10)}</div>
          <div>•</div>
          <div className="taglist">
            {tags
              ? tags.map((tag) => {
                  return (
                    <li className="inline">
                      <Link className="hover:text-blue" href={`/tags/${tag}`}>
                        {tag}
                      </Link>
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
  </>;
};

export default PostDisplay;
