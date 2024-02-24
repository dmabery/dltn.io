import Markdown from "markdown-to-jsx";
import ImageWithCaption from "./ImageWithCaption";
import InlineImage from "./InlineImage";
import SideNote from "./SideNote";
import Subscribe from "./Subscribe";
import SubscribeGroup from "./SubscribeGroup";

const PostBodyContent = (props) => (
  <div className="prose-h4:text-gray-800 prose prose-quoteless prose-h1:text-2xl prose-h1:font-medium prose-h1:leading-tight prose-h2:text-xl prose-h2:font-medium prose-h2:text-gray-800 prose-h3:text-xl prose-h3:font-medium prose-a:text-gray-600 prose-h3:text-gray-800 prose-h4:text-lg prose-h4:font-medium hover:prose-a:text-blue prose-blockquote:border-none prose-blockquote:pl-10 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:leading-normal prose-blockquote:text-[#414141] prose-pre:font-normal prose-img:m-0 sm:prose-h1:leading-tight">
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
