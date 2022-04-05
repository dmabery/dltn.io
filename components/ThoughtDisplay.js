import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from 'next/link'
import Markdown from "markdown-to-jsx";
import SideNote from "./SideNote";
const prism = require("prismjs")
import { useEffect } from "react";
import PostContentDisplay from "./PostContent";

const ThoughtDisplay = (props) => {

  useEffect(() => {
    prism.highlightAll();
  }, []);

    return (
        <div className="prose-white prose-invert text-slate-400 max-w-none prose-a:text-amber-700 hover:prose-a:text-slate-500 focus:prose-a:text-slate-300 prose hover:prose-a:underline prose-h1:leading-tight" key={props.key} >
        <div className="">
          <Link href={'/thoughts/' + props.slug} passHref><a className="text-left text-2xl mt-7 mb-4 font-bold">{props.title}</a></Link>
          <div className="text-md">{props.description}</div>
          <div className="text-xs mt-2">Published: {new Date(props.date).toLocaleString()}</div>
        </div>
        <PostContentDisplay content={props.content} />
        <div className="border mt-6 mb-10"></div>
      </div>
    )
}

export default ThoughtDisplay;