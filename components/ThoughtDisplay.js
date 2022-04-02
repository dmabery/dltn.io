import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from 'next/link'
import Markdown from "markdown-to-jsx";
import SideNote from "./SideNote";

const ThoughtDisplay = (props) => {
    return (
        <div className="prose-white max-w-none prose-a:text-amber-700 hover:prose-a:text-slate-500 focus:prose-a:text-gray-900 prose hover:prose-a:underline prose-h1:leading-tight" key={props.key} >
        <div className="">
          <Link href={'/thoughts/' + props.slug} passHref><a className="text-left text-2xl mt-7 mb-4 font-bold">{props.title}</a></Link>
          <div className="text-md">{props.description}</div>
          <div className="text-xs mt-2">Published: {new Date(props.date).toLocaleString()}</div>
        </div>
        <Markdown options={{overrides: {SideNote}}}>{props.content}</Markdown>
        <div className="border mt-6 mb-10"></div>
      </div>
    )
}

export default ThoughtDisplay;