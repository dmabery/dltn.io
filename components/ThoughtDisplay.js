import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from 'next/link'
import Markdown from "markdown-to-jsx";
const prism = require("prismjs")
import { useEffect } from "react";
import PostContentDisplay from "./PostContent";

const ThoughtDisplay = (props) => {

  useEffect(() => {
    prism.highlightAll();
  }, []);

    return (
        <div className="prose-white text-slate-900 max-w-none prose-a:text-blue-900 hover:decoration-amber-700 focus:prose-a:text-slate-900 prose hover:prose-a:underline prose-h1:leading-tight" key={props.key} >
        <div className="">
          <Link href={'/thoughts/' + props.slug} passHref><a className="text-left text-3xl mt-7 mb-4 font-bold">{props.title}</a></Link>
          <div className="text-md">{props.description}</div>
          <div className="text-xs mt-2">Published: {new Date(props.date).toLocaleString()}</div>
        </div>
        <PostContentDisplay content={props.content} />
        <div className="border mt-6 mb-10"></div>
      </div>
    )
}

export default ThoughtDisplay;