import Link from "next/link";
import { useEffect } from "react";
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

  return <>
  <article className="text-[neutral-200]">
    <div className="gap-10 flex font-sansSerif">
      <div className="hidden text-[14px] shrink-0 text-gray-600 md:inline">
        {date.slice(0,10)}
      </div>
      <div className="border-b pb-10">
        <div className="font-bold hover:text-blue mb-3"><Link href={`/${slug}`} legacyBehavior>{title}</Link></div>
        <div
        className="prose prose-quoteless max-w-none leading-normal text-[#262626] underline-offset-2 prose-headings:font-sansSerif prose-headings:text-[22px] prose-a:text-blue-800 prose-a:no-underline hover:prose-a:text-blue-900 hover:prose-a:underline prose-blockquote:border-none prose-blockquote:pl-10 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:leading-normal prose-blockquote:text-[#414141] prose-pre:font-normal prose-img:m-0 sm:prose-h1:leading-tight md:prose-headings:text-[24px]"
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </div>
      </div>

    </div>
    </article>
  </>;
};

export default HomePagePostDisplay;
