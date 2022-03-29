import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from 'next/link'

const ThoughtDisplay = (props) => {
    return (
        <div className="prose-white max-w-none prose-a:text-amber-700 hover:prose-a:text-slate-500 focus:prose-a:text-gray-900 prose hover:prose-a:underline prose-h1:leading-tight" >
        <div className="">
          <Link href={'/thoughts/' + props.slug} passHref><a className="text-left text-2xl mt-7 mb-4 font-bold">{props.title}</a></Link>
          <div className="text-md">{props.description}</div>
          <div className="text-xs mt-2">Published: {new Date(props.date).toLocaleString()}</div>
        </div>
        <ReactMarkdown>{props.content}</ReactMarkdown>
        <div className="border mt-6 mb-10"></div>
      </div>
    )
}

export default ThoughtDisplay;