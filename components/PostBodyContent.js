import Markdown from "markdown-to-jsx";
import InlineImage from "./InlineImage";
import SideNote from "./SideNote";
import Subscribe from "./Subscribe";
import SubscribeGroup from "./SubscribeGroup";

const PostBodyContent = (props) => (
  <div className="prose prose-quoteless max-w-none text-[18px] text-neutral-800 underline-offset-2 prose-h1:leading-tight prose-h2:text-2xl prose-h2:text-neutral-100 prose-h3:text-xl prose-h3:text-neutral-100 prose-h4:text-xl prose-h4:text-neutral-100 prose-p:leading-relaxed prose-a:text-blue-500 prose-a:no-underline hover:prose-a:text-blue-700 hover:prose-a:underline prose-blockquote:border-none prose-blockquote:pl-10 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:leading-normal prose-blockquote:text-neutral-300/80 prose-strong:text-neutral-900 prose-pre:font-normal sm:prose-h1:leading-tight">
    <Markdown
      options={{
        overrides: { SideNote, Subscribe, InlineImage, SubscribeGroup },
      }}
    >
      {props.content || ""}
    </Markdown>
  </div>
);

export default PostBodyContent;
