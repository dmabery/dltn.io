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
                <article className=" mx-auto max-w-screen-md text-neutral-300" >
                  <div className="border-b-2 mb-4 text-slate-100 pb-5 md:ml-0 mr-0">
                    <h1 className="text-left text-4xl mt-2 decoration-4 font-bold mb-2 w-3/4">{props.title || ''}</h1>
                    <div className="text-xs text-slate-400">Published: {props.date.slice(0,10)}</div>
                  </div>
                  <div className="prose max-w-screen-md prose:ml-0 underline-offset-2 prose-strong:text-neutral-100 text-neutral-300 prose-a:text-amber-500 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-amber-400 prose-h1:leading-tight prose-h2:text-neutral-300 prose-h3:text-neutral-300 prose-h4:text-neutral-300 sm:prose-h1:leading-tight prose-blockquote:font-normal prose-blockquote:text-neutral-300 prose-blockquote:border-amber-200 prose-blockquote:leading-normal prose-blockquote:pl-5 prose-blockquote:not-italic">
                  <PostContentDisplay content={props.content} />
                  </div>
                </article>
              </>
    )
} 

export default PostTitleDisplay;
