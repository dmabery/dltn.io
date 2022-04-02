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
             <Meta title={props.title || ''} description={props.description || ''} image={props.image || ''} />
                <article className="container mx-auto max-w-screen-sm prose-white prose-a:text-sky-700 hover:prose-a:text-amber-700 focus:prose-a:text-gray-900 prose hover:prose-a:no-underline prose-h1:leading-tight sm:prose-h1:leading-tight pr-5 pl-5 md:p-0" >
                  <div className="border-b-2 pb-3 mb-10">
                    <div className="text-xs mt-4">{props.date.slice(0,10)}</div>
                    <h1 className="text-left text-3xl mt-2 mb-4 decoration-4">{props.title || ''}</h1>
                    <div className="text-md">{documentToReactComponents(props.description) || ''}</div>
                  </div>
                    {props.content || ''}
                </article>
              </>
    )
}

export default MarkdownPostDisplay;