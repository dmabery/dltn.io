import Link from "next/link";
import { useEffect } from "react";
const prism = require("prismjs");

const PostExcerpt = ({ title, description, date, tags, slug }) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <>
      <div className="text-neutral-200">
        <div>
          <Link href={`/posts/${slug}`}>
            <a className="font-heading text-2xl font-medium">{title || ""}</a>
          </Link>
          <div className="tags flex gap-2 py-2 font-heading text-sm text-[#868686]">
            <div>{date}</div>
            <div>-</div>
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
      </div>
    </>
  );
};

export default PostExcerpt;
