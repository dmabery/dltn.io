import ReactMarkdown from 'react-markdown'
import { useEffect } from 'react'
import Meta from './Meta';
const prism = require("prismjs")
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SideNote from './SideNote'
import Markdown from 'markdown-to-jsx';
import PostContentDisplay from './PostContent';

const PostTitleDisplay = (props, children) => {

    useEffect(() => {
        prism.highlightAll();
      }, []);

    return (
             <>
             <Meta title={props.title || ''} description={props.description || ''} image={props.image || ''} />
                <article className="container max-w-screen-sm" >
                  <div className="border-b-2 mb-4 text-slate-100 pb-5 ml-5 mr-5 md:ml-0 mr-0">
                    <h1 className="text-left text-3xl mt-2 decoration-4 font-bold mb-2 w-3/4">{props.title || ''}</h1>
                    <div className="text-xs text-slate-400">Published: {props.date.slice(0,10)}</div>
                  </div>
                  <div className="prose prose-invert font-light underline-offset-2 prose-strong:text-gray-100 text-gray-200 prose-a:text-blue-500 prose-a:decoration-slate-500 hover:prose-a:no-underline prose-h1:leading-tight prose-h3:text-slate-300 prose-h4:text-slate-300 sm:prose-h1:leading-tight pr-5 pl-5 md:p-0 prose-blockquote:border-none prose-blockquote:font-normal prose-blockquote:bg-slate-400/40 prose-blockquote:rounded prose-blockquote:leading-normal prose-blockquote:p-1 prose-blockquote:pl-5 prose-blockquote:pr-5 prose-blockquote:not-italic">
                  <PostContentDisplay content={props.content} />
                  </div>
                </article>
              </>
    )
}

export default PostTitleDisplay;
