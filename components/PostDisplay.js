import Link from "next/link";
import { useEffect } from "react";
import PostBodyContent from "./PostBodyContent";
const prism = require("prismjs");

function formatMonthYear(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

const PostDisplay = ({
  title,
  description,
  image,
  date,
  tags,
  content,
  prevPost,
  nextPost,
}) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <article>
      <div className="mb-3 text-[20px] font-medium leading-tight">
        {title || ""}
      </div>
      <div className="mb-3.5 text-[11.5px] text-[#555]">
        {formatMonthYear(date)}
        {tags && tags.length > 0 && (
          <>
            {" "}
            &middot; filed under{" "}
            {tags.map((tag, i) => (
              <span key={tag}>
                {i > 0 && ", "}
                <Link href={`/tags/${tag}`}>{tag}</Link>
              </span>
            ))}
          </>
        )}
      </div>

      <PostBodyContent content={content} dropCap />

      {(prevPost || nextPost) && (
        <div className="my-4 flex justify-between border-y border-dotted border-[#999] py-1.5 text-[11.5px]">
          <div>
            {prevPost && (
              <Link href={`/posts/${prevPost.slug}`}>&laquo; {prevPost.title}</Link>
            )}
          </div>
          <div className="text-right">
            {nextPost && (
              <Link href={`/posts/${nextPost.slug}`}>{nextPost.title} &raquo;</Link>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default PostDisplay;
