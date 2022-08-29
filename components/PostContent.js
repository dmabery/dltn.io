import Markdown from "markdown-to-jsx"
import SideNote from "./SideNote"
import Subscribe from "./Subscribe"

const PostContentDisplay = (props) => {
    return (
        <div className="prose max-w-screen-md prose:ml-0 underline-offset-2 prose-strong:text-neutral-100 text-neutral-300 prose-a:text-amber-500 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-amber-400 prose-h1:leading-tight prose-h2:text-amber-300 prose-h3:text-neutral-100 prose-h4:text-neutral-100 sm:prose-h1:leading-tight prose-blockquote:font-normal prose-blockquote:text-neutral-300 prose-blockquote:border-red-600 prose-blockquote:leading-normal prose-blockquote:pl-5 prose-blockquote:not-italic">
            <Markdown options={{overrides: {SideNote, Subscribe}}}>{props.content || ''}</Markdown>
        </div>
    )
}

export default PostContentDisplay