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
          <div className="border-[#868686/60] border-t border-b py-3 text-xs text-[#868686]">
            {date.slice(0, 10)} | Filled under:
            {tags.map((tag) => (
              <span key={tag}> {tag}</span>
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
