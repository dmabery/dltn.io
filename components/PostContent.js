import Markdown from "markdown-to-jsx"
import SideNote from "./SideNote"

const PostContentDisplay = (props) => {
    return (
        <Markdown options={{overrides: {SideNote}}}>{props.content || ''}</Markdown>
    )
}

export default PostContentDisplay