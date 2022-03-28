import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ThoughtDisplay = (props) => {
    return (
        <div className="prose-white max-w-none prose-a:text-sky-700 hover:prose-a:text-amber-700 focus:prose-a:text-gray-900 prose prose-a:no-underline hover:prose-a:underline prose-h1:leading-tight sm:prose-h1:leading-tight md:p-0 prose-h1:text-[33px] sm:prose-h1:text-5xl" >
        <div className="border-b-2 pb-3 mb-10">
          <h3 className="text-left text-2xl mt-7 mb-4 underline decoration-amber-700 decoration-4">{props.title}</h3>
          <div className="text-md">{props.description}</div>
          <div className="text-xs mt-4">Published: {props.date}</div>
        </div>
        <div>{documentToReactComponents(props.content)}</div>
      </div>
    )
}

export default ThoughtDisplay;