import Markdown from "markdown-to-jsx";
import ImageWithCaption from "./ImageWithCaption";
import InlineImage from "./InlineImage";
import SideNote from "./SideNote";
import Subscribe from "./Subscribe";
import SubscribeGroup from "./SubscribeGroup";

const PostBodyContent = (props) => (
  <div className="prose prose-quoteless max-w-none text-[20px] leading-normal text-[#262626] underline-offset-2 prose-headings:font-sansSerif prose-headings:text-[22px] prose-a:text-blue-800 prose-a:no-underline hover:prose-a:text-blue-900 hover:prose-a:underline prose-blockquote:border-none prose-blockquote:pl-10 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:leading-normal prose-blockquote:text-[#414141] prose-pre:font-normal prose-img:m-0 sm:prose-h1:leading-tight md:prose-headings:text-[24px]">
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
