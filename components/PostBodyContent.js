import Markdown from "markdown-to-jsx";
import InlineImage from "./InlineImage";
import SideNote from "./SideNote";
import Subscribe from "./Subscribe";

const PostBodyContent = (props) => (
  <div className="font-md prose prose-quoteless text-[18px] leading-normal text-[#111827] underline-offset-2 prose-h1:leading-tight prose-h2:text-2xl prose-h2:text-gray-900/90 prose-h3:text-xl prose-h3:text-gray-900/90 prose-h4:text-xl prose-h4:text-gray-900/90 prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-900 hover:prose-a:underline prose-blockquote:border-none prose-blockquote:pl-10 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:leading-normal prose-blockquote:text-[#414141] prose-pre:font-normal sm:prose-h1:leading-tight">
    <Markdown options={{ overrides: { SideNote, Subscribe, InlineImage } }}>
      {props.content || ""}
    </Markdown>
  </div
);

export default PostBodyContent;
