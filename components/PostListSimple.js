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
            <div className="max-w-lg text-blue-600 mb-2" key={props.key}>
            <Link href={'/' + slugFunction() + props.slug} passHref>
                  <a><span className="text-sm col-span-3 list-disc text-l underline decoration-slate-500 hover:decoration-amber-700 hover:text-amber-700 hover:decoration-2">{props.title}</span></a>
            </Link>
            </div>
        </div>
)}

export default PostListSimple;