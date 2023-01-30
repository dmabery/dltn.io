import Markdown from 'markdown-to-jsx';
import SideNote from './SideNote';
import SquareWhileTap from './SquareWhileTap';
import Subscribe from './Subscribe';

const PostBodyContent = (props) => (
  <div className="container mx-auto prose underline-offset-2 text-gray-800/80 prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-900 prose-h1:leading-tight prose-h2:text-[#0C2059] prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h3:text-[#263459] prose-h4:text-[#263459] sm:prose-h1:leading-tight prose-blockquote:font-normal prose-blockquote:text-neutral-900 prose-blockquote:border-red-500 prose-blockquote:leading-normal prose-blockquote:pl-5 prose-blockquote:not-italic prose-pre:font-normal">
    <Markdown options={{ overrides: { SideNote, Subscribe, SquareWhileTap } }}>
      {props.content || ''}
    </Markdown>
  </div>
);

export default PostBodyContent;
