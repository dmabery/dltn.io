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
      <article>
        <div className="white">
          <div className="mb-1 font-serif text-3xl font-bold">
            {title || ""}
          </div>
          <div className="tags border-[#868686/60] text-md flex gap-2 border-t border-b py-3">
            <div>{date.slice(0, 10)}</div>
            <div>|</div>
            <div>
              Filed under:
              {tags.map((tag) => (
                <Link href={`/tags/${tag}`}>
                  <a className="tag text-blue-600 hover:underline" key={tag}>
                    {" "}
                    {tag}
                  </a>
                </Link>
              ))}
            </div>
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
