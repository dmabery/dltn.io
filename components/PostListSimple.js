import Link from 'next/link'

const PostListSimple = (props) => {

const contentType = props.contentType;
const slugFunction = () => {

    if (contentType === 'bookNotes') {
        return 'book-notes/';
    } else if (contentType === 'tinyThought') {
        return 'thoughts/';  
    } else if (contentType === 'snippet') {
        return 'essays/';
   }
}

return (
        <div>
            <div className="max-w-lg text-blue-500 mb-2" key={props.key}>
            <Link href={slugFunction() + props.slug} passHref>
                   <a><span className="col-span-3 underline underline-offset-2 decoration-slate-500 hover:no-underline leading-6 hover:decoration-2">{props.title}</span></a>
            </Link>
            <span className="text-xs text-neutral-900 ml-1 hidden md:inline">{props.date.slice(0,10)}</span>
            </div>
        </div>
)}

export default PostListSimple;