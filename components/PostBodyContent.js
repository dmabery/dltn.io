import Markdown from "markdown-to-jsx";
import ImageWithCaption from "./ImageWithCaption";
import InlineImage from "./InlineImage";
import SideNote from "./SideNote";
import Subscribe from "./Subscribe";
import SubscribeGroup from "./SubscribeGroup";

const PostBodyContent = (props) => (
  <div className="prose-h4:text-gray-800 text-[16px] md:text-[16.8px] text-[#100f0f] prose-a:font-normal prose prose-quoteless prose-h1:text-2xl prose-h1:font-medium prose-h1:leading-tight prose-h2:text-xl prose-h2:font-medium prose-h2:text-gray-800 prose-h3:text-xl prose-h3:font-medium prose-h3:text-gray-800 prose-h4:text-lg prose-h4:font-medium hover:prose-a:text-blue-900 hover:prose-a:no-underline prose-a:text-blue prose-blockquote:py-0 prose-blockquote:border-[#100f0f] prose-blockquote:border-l-[2px] prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-[#100f0f] prose-pre:font-normal prose-img:m-0 sm:prose-h1:leading-tight">
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
