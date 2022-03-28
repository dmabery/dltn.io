import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from 'next/link'

const ThoughtDisplay = (props) => {
    return (
        <div className="prose-white max-w-none prose-a:text-sky-700 hover:prose-a:text-amber-700 focus:prose-a:text-gray-900 prose hover:prose-a:underline prose-h1:leading-tight sm:prose-h1:leading-tight md:p-0 prose-h1:text-[33px] sm:prose-h1:text-5xl" >
        <div className="">
          <Link href={'/thoughts/' + props.slug} passHref><a className="text-left text-2xl mt-7 mb-4">{props.title}</a></Link>
          <div className="text-md">{props.description}</div>
          <div className="text-xs mt-1">Published: {new Date(props.date).toLocaleString()}</div>
        </div>
        <div>{documentToReactComponents(props.content)}</div>
        <div className="border mt-6 mb-10"></div>
      </div>
    )
}

export default ThoughtDisplay;