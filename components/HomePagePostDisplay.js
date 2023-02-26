import Link from "next/link";
import { useEffect } from "react";
import LinkedTagButton from "./LinkedTagButton";
import Meta from "./Meta";
import PostBodyContent from "./PostBodyContent";

const prism = require("prismjs");

const BlogRoll = [
  {
    name: "Farnam Street",
    link: "https://fs.blog/",
  },
];

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
      <Meta title={title} description={description} image={image} />
      <article className="mx-auto text-neutral-300">
        <div className="p-0 text-gray-900/90 md:pl-5 md:pr-5">
          <h1 className="mb-3 text-center text-3xl font-bold">
            <Link href={`posts/${slug}`}>{title || ""}</Link>
          </h1>
        </div>
        <div className="text-center">
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
        <div className="container mx-auto">
          <PostBodyContent content={content} />
        </div>
      </article>
    </>
  );
};

export default HomePagePostDisplay;
