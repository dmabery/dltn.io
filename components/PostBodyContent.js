import Markdown from 'markdown-to-jsx';
import SideNote from './SideNote';
import SquareWhileTap from './SquareWhileTap';
import Subscribe from './Subscribe';

const PostBodyContent = (props) => (
  <div className="container prose mx-auto text-gray-800/80 underline-offset-2 prose-h1:leading-tight prose-h2:text-3xl prose-h2:text-[#0C2059] prose-h3:text-2xl prose-h3:text-[#263459] prose-h4:text-xl prose-h4:text-[#263459] prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-900 hover:prose-a:underline prose-blockquote:border-red-500 prose-blockquote:pl-5 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:leading-normal prose-blockquote:text-neutral-900 prose-pre:font-normal sm:prose-h1:leading-tight">
    <Markdown options={{ overrides: { SideNote, Subscribe, SquareWhileTap } }}>
      {props.content || ''}
    </Markdown>
  </div>
);

export default PostBodyContent;
