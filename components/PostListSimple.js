import LinkText from './LinkText';

const PostListSimple = (props) => {

const {contentType} = props;
const slugFunction = () => {

    if (contentType === 'bookNotes') {
        return 'book-notes/';
    } else if (contentType === 'tinyThought') {
        return 'thoughts/';
    } else if (contentType === "til") {
        return 'til/';
    } else if (contentType === 'snippet') {
        return 'essays/';
   }
}

return (
        <div>
            <div className="max-w-lg text-blue-500 mb-1" key={props.key}>
                <LinkText slug={slugFunction() + props.slug} text={props.title} type="bright" />
            <span className="text-xs text-neutral-300 ml-1 hidden md:inline">{props.date.slice(0,10)}</span>
            </div>
        </div>
)}

export default PostListSimple;