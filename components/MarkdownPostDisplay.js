import ReactMarkdown from 'react-markdown'
import { useEffect } from 'react'
import Meta from './Meta';
const prism = require("prismjs")
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SideNote from './SideNote'
import Markdown from 'markdown-to-jsx';

const MarkdownPostDisplay = (props, children) => {

    useEffect(() => {
        prism.highlightAll();
      }, []);

    return (
             <>
             <Meta title={props.title || ''} description={props.description || ''} image={props.image || ''} />
                <article className="container mx-auto max-w-screen-sm" >
                  <div className="border-b-2 mb-4 text-gray-900 pb-5 ml-5 mr-5 md:ml-0 mr-0">
                    <h1 className="text-left text-3xl mt-2 decoration-4 font-bold mb-2">{props.title || ''}</h1>
                    <div className="text-xs text-slate-400">Published: {props.date.slice(0,10)}</div>
                  </div>
                  <div className="prose prose-white prose-a:text-sky-700 hover:prose-a:text-amber-700 focus:prose-a:text-gray-900 hover:prose-a:no-underline prose-h1:leading-tight sm:prose-h1:leading-tight pr-5 pl-5 md:p-0">
                  <Markdown options={{overrides: {SideNote}}}>{props.content || ''}</Markdown>
                  </div>
                </article>
              </>
    )
}

export default MarkdownPostDisplay;