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
      <article className="text-[neutral-200]">
        <div>
          <Link href={`/posts/${slug}`}>
            <a className="font-heading text-2xl font-medium text-neutral-800">
              {title || ""}
            </a>
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
        <div>
          <PostBodyContent content={content} />
        </div>
      </article>
    </>
  );
};

export default HomePagePostDisplay;
