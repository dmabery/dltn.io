import Link from 'next/link'

const PostListSimple = (props) => {
return (
        <div>
            <div className="max-w-lg text-slate-500 mb-1" key={props.key}>
            <Link href={'/essays/' + props.slug} passHref>
                   <a><span className="col-span-3 text-l underline decoration-slate-500 hover:decoration-amber-700 leading-6 font-bold hover:decoration-2">{props.title}</span></a>
            </Link>
            <span className="text-xs text-gray-400 ml-1">{props.date}</span>
            </div>
        </div>
)}

export default PostListSimple;