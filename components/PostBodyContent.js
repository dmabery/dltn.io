import Markdown from "markdown-to-jsx";
import ImageWithCaption from "./ImageWithCaption";
import InlineImage from "./InlineImage";
import SideNote from "./SideNote";
import Subscribe from "./Subscribe";
import SubscribeGroup from "./SubscribeGroup";

const PostBodyContent = (props) => (
  <div
    className={`prose prose-quoteless max-w-none text-[13.5px] leading-[1.75] text-[#111] prose-headings:font-medium prose-headings:text-[#111] prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-a:font-normal prose-a:text-[#0000cc] hover:prose-a:text-[#001a70] prose-blockquote:border-l-[3px] prose-blockquote:border-[#999] prose-blockquote:bg-[#f6f5ef] prose-blockquote:py-1 prose-blockquote:font-normal prose-blockquote:text-[#333] prose-pre:font-normal prose-img:m-0 ${
      props.dropCap ? "drop-cap" : ""
    }`}
  >
    <Markdown
      options={{
        overrides: {
          SideNote,
          Subscribe,
          InlineImage,
          SubscribeGroup,
          ImageWithCaption,
        },
      }}
    >
      {props.content || ""}
    </Markdown>
  </div>
);

export default PostBodyContent;
