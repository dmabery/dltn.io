import Link from "next/link";
import { useEffect } from "react";
import LinkedTagButton from "./LinkedTagButton";
import Meta from "./Meta";
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
}) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <>
      <Meta title={title} description={description} image={image} />
      <article className="text-neutral-300">
        <div className="border-b p-0 pb-5 text-gray-900/90">
          <h1 className="mb-1 text-3xl font-bold">{title || ""}</h1>
          <div className="text-xs text-slate-500">{date.slice(0, 10)}</div>
        </div>
        <div>
          <PostBodyContent content={content} />
        </div>
        <div>
          {tags.map((tag) => (
            <span key={tag}>
              {" "}
              <Link href={`/tags/${tag}`}>
                <a>
                  <LinkedTagButton btnText={tag} />
                </a>
              </Link>
            </span>
          ))}
        </div>
        <SubscribeGroup />
      </article>
    </>
  );
};

export default HomePagePostDisplay;
