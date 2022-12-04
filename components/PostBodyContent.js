import Markdown from "markdown-to-jsx"
import { Tex } from 'react-tex'
import SideNote from "./SideNote"
import SquareWhileTap from "./SquareWhileTap"
import Subscribe from "./Subscribe"

const PostBodyContent = (props) => {
    return (
        <div className="prose max-w-screen-md prose:ml-0 underline-offset-2 prose-strong:text-neutral-100 font-light text-neutral-200 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-amber-400 prose-h1:leading-tight prose-h2:text-yellow-300 prose-h3:text-neutral-100 prose-h4:text-neutral-100 sm:prose-h1:leading-tight prose-blockquote:font-normal prose-blockquote:text-neutral-300 prose-blockquote:border-red-500 prose-blockquote:leading-normal prose-blockquote:pl-5 prose-blockquote:not-italic prose-pre:font-normal prose-code:text-white">
            <Markdown options={{overrides: {SideNote, Subscribe, SquareWhileTap, Tex}}}>{props.content || ''}</Markdown>
        </div>
    )
}

export default PostBodyContent;