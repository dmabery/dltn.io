import Markdown from "markdown-to-jsx"
import SideNote from "./SideNote"
import Subscribe from "./Subscribe"

const PostContentDisplay = (props) => {
    return (
        <Markdown options={{overrides: {SideNote, Subscribe}}}>{props.content || ''}</Markdown>
    )
}

export default PostContentDisplay