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
                <article className="container mx-auto max-w-screen-sm" >
                  <div className="border-b-2 text-slate-900 pb-5 mr-5 md:ml-0 mr-0">
                    <h1 className="text-left text-3xl mt-2 decoration-4 font-bold mb-2">{props.title || ''}</h1>
                    <div className="text-xs text-slate-500">Published: {props.date.slice(0,10)}</div>
                  </div>
                  <div className="prose prose-strong:text-slate-900 font-light text-slate-900 prose-a:text-blue-600 hover:prose-a:text-amber-700 hover:prose-a:no-underline prose-h1:leading-tight prose-h3:text-slate-900 prose-h4:text-slate-900 sm:prose-h1:leading-tight  md:p-0 prose-blockquote:border-amber-700 prose-blockquote:text-slate-100 prose-blockquote:font-light prose-blockquote:not-italic prose-blockquote:bg-gray-700 prose-blockquote:p-3 prose-blockquote:rounded">
                  <PostContentDisplay content={props.content} />
                  </div>
                </article>
              </>
    )
}

export default PostTitleDisplay;