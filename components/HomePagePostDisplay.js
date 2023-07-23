import Link from "next/link";
import { useEffect } from "react";
import PostBodyContent from "./PostBodyContent";
import SubscribeGroup from "./SubscribeGroup";
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
        <div className="text-gray-900/90">
          <Link href={`/posts/${slug}`}>
            <a className="mb-1 font-serif text-3xl font-bold">{title || ""}</a>
          </Link>
          <div className="tags border-[#868686/60] border-t border-b py-3 text-xs text-[#868686]">
            {date.slice(0, 10)}
            {tags.map((tag) => (
              <Link href={`/tags/${tag}`}>
                <a className="tag hover:underline" key={tag}>
                  {" "}
                  {tag}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <PostBodyContent content={content} />
        </div>
        <SubscribeGroup />
      </article>
    </>
  );
};

export default HomePagePostDisplay;
