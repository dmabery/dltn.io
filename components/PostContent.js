import Markdown from "markdown-to-jsx"
import Callout from "./Callout"

const PostContentDisplay = (props) => {
    return (
        <Markdown options={{overrides: {Callout}}}>{props.content || ''}</Markdown>
    )
}

export default PostContentDisplay