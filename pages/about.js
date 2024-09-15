import fs from "fs";
import Markdown from "markdown-to-jsx";
import path from "path";
import Meta from "../components/Meta";

export const getStaticProps = async () => {
  const data = fs.readFileSync(path.join("content", "about.md"), {
    encoding: "utf8",
  });
  return {
    props: { data },
  };
};

export default function About({ data }) {
  return (
    <div className="bg-white border border-black p-5 prose prose-quoteless max-w-none text-[20px] leading-normal text-[#262626] underline-offset-2 prose-headings:font-sansSerif prose-headings:text-[22px] prose-a:text-blue-800 prose-a:no-underline hover:prose-a:text-blue-900 hover:prose-a:underline prose-blockquote:border-none prose-blockquote:pl-10 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:leading-normal prose-blockquote:text-[#414141] prose-pre:font-normal prose-img:m-0 sm:prose-h1:leading-tight md:prose-headings:text-[24px]">
      <Meta title="About me" />
      <Markdown>{data}</Markdown>
    </div>
  );
}
