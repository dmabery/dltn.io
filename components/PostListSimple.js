import LinkText from './LinkText';

const PostListSimple = (props) => {

return (
        <div>
            <div className="max-w-lg text-blue-500 mb-1" key={props.key}>
                <LinkText slug={props.slug} text={props.title} type="bright" />
            <span className="text-xs text-neutral-300 ml-1 md:inline">{props.date.slice(0,10)}</span>
            </div>
        </div>
)}

export default PostListSimple;