import ReactMarkdown from 'react-markdown'
import { useEffect } from 'react'
import Meta from './Meta';
const prism = require("prismjs")
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const MarkdownPostDisplay = (props, children) => {

    useEffect(() => {
        prism.highlightAll();
      }, []);

    return (
             <>
             <Meta title={props.title} description={props.description} image={props.image || ''} />
                <div className="container mx-auto max-w-screen-sm prose-white prose-a:text-sky-700 hover:prose-a:text-amber-700 focus:prose-a:text-gray-900 prose prose-a:no-underline hover:prose-a:underline prose-h1:leading-tight sm:prose-h1:leading-tight pr-5 pl-5 md:p-0 prose-h1:text-[33px] sm:prose-h1:text-5xl" >
                  <div className="border-b-2 pb-3 mb-10">
                    <h1 className="text-left text-5xl mt-7 mb-4 underline decoration-amber-700 decoration-4">{props.title}</h1>
                    <div className="text-md">{documentToReactComponents(props.description) || ''}</div>
                    <div className="text-xs mt-4">Published: {props.date.slice(0,10)}</div>
                  </div>
                    {props.content}
                </div>
              </>
    )
}

export default MarkdownPostDisplay;