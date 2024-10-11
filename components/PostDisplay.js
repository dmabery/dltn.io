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
    <article>
      <div className="mb-14 font-sansSerif">
        <h1 className="text-[35px] leading-tight font-semibold">
          {title || ""}
        </h1>
        <div className="tags flex gap-2 py-2 text-sm">
          <div>{date.slice(0,10)}</div>
        </div>
      </div>
      <div>
        <PostBodyContent content={content} />
      </div>
      <div className="my-28 inline-flex">
        <p className="text-sm mb-3 mr-3">Tagged: </p>
            {tags
              ? tags.map((tag) => {
                  return (
                    <li className="inline-flex mr-2 font-medium rounded-lg text-sm">
                      <Link className="hover:underline text-[#003EDB]" href={`/tags/${tag}`}>
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
